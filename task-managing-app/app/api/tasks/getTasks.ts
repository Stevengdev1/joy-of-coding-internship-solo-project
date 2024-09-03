// This files is for fetching tasks.

// app/api/tasks/getTasks.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    // This Fetches all tasks from the database using Prisma
    const tasks = await prisma.task.findMany();
    
    // This Responds with the tasks in JSON format
    return NextResponse.json(tasks);
  } catch (error) {
    console.error('Error fetching tasks:', error);
    
    // If there is an error, respond with an error message
    return NextResponse.json({ error: 'Error fetching tasks' }, { status: 500 });
  } finally {
    // Optional: Close the Prisma client connection after the request
    await prisma.$disconnect();
  }
}
