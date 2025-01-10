-- CreateTable
CREATE TABLE "Visit" (
    "id" SERIAL NOT NULL,
    "country" TEXT NOT NULL,
    "hour" INTEGER NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Visit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PageView" (
    "id" SERIAL NOT NULL,
    "path" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "browser" TEXT NOT NULL,
    "device" TEXT NOT NULL,
    "projectSlug" TEXT,

    CONSTRAINT "PageView_pkey" PRIMARY KEY ("id")
);
