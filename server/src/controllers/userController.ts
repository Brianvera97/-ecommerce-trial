// controllers/userController.ts
import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

// Crear un nuevo usuario
export const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, name, password } = req.body;
        const newUser = await prisma.user.create({
            data: {
                email,
                name,
                password,  // Asegúrate de que la contraseña esté cifrada
                
            },
        });
        res.status(201).json(newUser);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// Obtener un usuario por ID
export const getUserById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const user = await prisma.user.findUnique({
            where: { id: parseInt(id) },
        });
        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }
        res.status(200).json(user);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// Obtener todos los usuarios
export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await prisma.user.findMany();
        res.status(200).json(users);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// Actualizar un usuario
export const updateUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const { email, name, password,  } = req.body;
        const updatedUser = await prisma.user.update({
            where: { id: parseInt(id) },
            data: { email, name, password },
        });
        res.status(200).json(updatedUser);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// Eliminar un usuario
export const deleteUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        await prisma.user.delete({
            where: { id: parseInt(id) },
        });
        res.status(204).send();
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};
