import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

interface DecodedToken extends JwtPayload {
  sub: string;
  'custom:role'?: string;
}

// This declaration extends the global Express Request interface
// to include a user property with id and role information
declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;    // User's unique identifier
        role: string;  // User's role/permission level
      };
    }
  }
}

export const authMiddleware = (allowedRoles: string[]) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      res.status(401).json({ message: 'Unauthorized' });
      return;
    }

    try {
      const decoded = jwt.decode(token) as DecodedToken;
      const userRole = decoded['custom:role'] || '';
      req.user = {
        id: decoded.sub,
        role: userRole,
      };

      const hasAccess = allowedRoles.includes(userRole.toLowerCase());
      if (!hasAccess) {
        res.status(403).json({ message: 'Access Denied' });
        return;
      }
    } catch (err) {
      console.error('Failed to decode token:', err);
      res.status(400).json({ message: 'Invalid token' });
      return;
    }

    next();
  };
};
