const { PrismaClient } = require ('@prisma/client')

const database = new PrismaClient();

async function main() {
    try {
        await database.category.createMany({
            data: [
                { name: "Web Development" },
                { name: "Software Development" },
                { name: "Javascript" },
                { name: "React" },
                { name: "HTML" },
                { name: "CSS" },
                { name: "NEXT" },
            ]
        });
        console.log("Success")
    } catch (error) {
        console.log("Error seeding the database categories", error);
    } finally {
        await database.$disconnect()
    }
}

main()