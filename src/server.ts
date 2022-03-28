import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors'
import imovelRouter from './routes';

const PORT = '3333';

const app = express();

app.use(express.json());

app.use(imovelRouter);

app.use(
    (error: Error, request: Request, response: Response, next: NextFunction) => {
        if ( error instanceof Error ) {
            return response.status(400).json({
                message: error.message,
            })
        }

        return response.status(500).json({
            status: 'Error',
            message: 'Server has encountered an error. Please try again',
        });
    },
);

app.listen(3333, () => console.log(`Server is running on port ${PORT}`));
