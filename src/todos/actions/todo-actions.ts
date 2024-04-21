'use server';

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";

 
export const toggleTodo = async(id: string, complete: boolean) => {

    const session = await getServerSession(authOptions)

    const todo = await prisma.todo.findMany({ where: { id, userId: session?.user?.id } })

    if(!todo) {
        console.log(`El todo con el id ${ id } no existe`);
    }

    const updatedTodo = await prisma.todo.update({
        where: { id },
        data: { complete }
    })

    revalidatePath('/dashboard/server-todos')
    return updatedTodo
}

export const createTodo = async(description: string) => {

    const session = await getServerSession(authOptions)

    try {
        const todo = await prisma.todo.create({ data: { description, userId: session?.user?.id } })
        
        revalidatePath('/dashboard/server-todos')
        return todo
    } catch (error) {
        return {
            message: 'Error al crear todo'
        }
    }
}

export const deleteCompleted = async(): Promise<void> => {

    const session = await getServerSession(authOptions)

    await prisma.todo.deleteMany({ where: { complete: true, userId: session?.user?.id } })
    revalidatePath('/dashboard/server-todos')
}