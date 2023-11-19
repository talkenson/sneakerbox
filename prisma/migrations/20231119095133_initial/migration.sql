-- CreateTable
CREATE TABLE "SneakerImage" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "url" TEXT NOT NULL,
    "sneakerId" TEXT NOT NULL,

    CONSTRAINT "SneakerImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sneaker" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "description" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "colorway" TEXT NOT NULL,
    "releaseDate" TIMESTAMP(3) NOT NULL,
    "retailPrice" DOUBLE PRECISION NOT NULL,
    "silhouette" TEXT NOT NULL,
    "sizes" DOUBLE PRECISION[],
    "quantity" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Sneaker_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SneakerImage" ADD CONSTRAINT "SneakerImage_sneakerId_fkey" FOREIGN KEY ("sneakerId") REFERENCES "Sneaker"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
