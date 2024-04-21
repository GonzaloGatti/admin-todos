import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import bcrypt from "bcryptjs";

export async function GET(request: Request) {
  await prisma.todo.deleteMany(); // delete * from todo
  await prisma.user.deleteMany(); // delete * from user

  const user = await prisma.user.create({
    data: {
      email: "ejemplo1@gmail.com",
      password: bcrypt.hashSync("123456"),
      roles: ["admin"],
      todos: {
        create: [
          { description: "Piedra del alma", complete: true },
          { description: "Piedra del poder" },
          { description: "Piedra del tiempo" },
          { description: "Piedra del espacio" },
        ],
      },
    },
  });

  // await prisma.todo.createMany({
  //     data: [
  //         { description: 'Piedra del alma', complete: true },
  //         { description: 'Piedra del poder' },
  //         { description: 'Piedra del tiempo' },
  //         { description: 'Piedra del espacio' },
  //     ]
  // })

  return NextResponse.json({
    message: "Seed message",
  });
}
