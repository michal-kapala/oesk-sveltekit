-- CreateTable
CREATE TABLE "Test" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Test_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Obj1" (
    "id" SERIAL NOT NULL,
    "name1" TEXT,
    "id_obj2" INTEGER NOT NULL,

    CONSTRAINT "Obj1_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Obj2" (
    "id" SERIAL NOT NULL,
    "name2" TEXT,
    "id_obj3" INTEGER NOT NULL,

    CONSTRAINT "Obj2_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Obj3" (
    "id" SERIAL NOT NULL,
    "name3" TEXT,
    "id_obj4" INTEGER NOT NULL,

    CONSTRAINT "Obj3_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Obj4" (
    "id" SERIAL NOT NULL,
    "name4" TEXT,
    "id_obj5" INTEGER NOT NULL,

    CONSTRAINT "Obj4_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Obj5" (
    "id" SERIAL NOT NULL,
    "name5" TEXT,
    "id_obj6" INTEGER NOT NULL,

    CONSTRAINT "Obj5_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Obj6" (
    "id" SERIAL NOT NULL,
    "name6" TEXT,
    "id_obj7" INTEGER NOT NULL,

    CONSTRAINT "Obj6_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Obj7" (
    "id" SERIAL NOT NULL,
    "name7" TEXT,
    "id_obj8" INTEGER NOT NULL,

    CONSTRAINT "Obj7_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Obj8" (
    "id" SERIAL NOT NULL,
    "name8" TEXT,
    "id_obj9" INTEGER NOT NULL,

    CONSTRAINT "Obj8_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Obj9" (
    "id" SERIAL NOT NULL,
    "name9" TEXT,
    "id_obj10" INTEGER NOT NULL,

    CONSTRAINT "Obj9_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Obj10" (
    "id" SERIAL NOT NULL,
    "ints" INTEGER[],
    "id_obj10" INTEGER NOT NULL,

    CONSTRAINT "Obj10_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Obj1_id_obj2_key" ON "Obj1"("id_obj2");

-- CreateIndex
CREATE UNIQUE INDEX "Obj2_id_obj3_key" ON "Obj2"("id_obj3");

-- CreateIndex
CREATE UNIQUE INDEX "Obj3_id_obj4_key" ON "Obj3"("id_obj4");

-- CreateIndex
CREATE UNIQUE INDEX "Obj4_id_obj5_key" ON "Obj4"("id_obj5");

-- CreateIndex
CREATE UNIQUE INDEX "Obj5_id_obj6_key" ON "Obj5"("id_obj6");

-- CreateIndex
CREATE UNIQUE INDEX "Obj6_id_obj7_key" ON "Obj6"("id_obj7");

-- CreateIndex
CREATE UNIQUE INDEX "Obj7_id_obj8_key" ON "Obj7"("id_obj8");

-- CreateIndex
CREATE UNIQUE INDEX "Obj8_id_obj9_key" ON "Obj8"("id_obj9");

-- CreateIndex
CREATE UNIQUE INDEX "Obj9_id_obj10_key" ON "Obj9"("id_obj10");

-- AddForeignKey
ALTER TABLE "Obj1" ADD CONSTRAINT "Obj1_id_obj2_fkey" FOREIGN KEY ("id_obj2") REFERENCES "Obj2"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Obj2" ADD CONSTRAINT "Obj2_id_obj3_fkey" FOREIGN KEY ("id_obj3") REFERENCES "Obj3"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Obj3" ADD CONSTRAINT "Obj3_id_obj4_fkey" FOREIGN KEY ("id_obj4") REFERENCES "Obj4"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Obj4" ADD CONSTRAINT "Obj4_id_obj5_fkey" FOREIGN KEY ("id_obj5") REFERENCES "Obj5"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Obj5" ADD CONSTRAINT "Obj5_id_obj6_fkey" FOREIGN KEY ("id_obj6") REFERENCES "Obj6"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Obj6" ADD CONSTRAINT "Obj6_id_obj7_fkey" FOREIGN KEY ("id_obj7") REFERENCES "Obj7"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Obj7" ADD CONSTRAINT "Obj7_id_obj8_fkey" FOREIGN KEY ("id_obj8") REFERENCES "Obj8"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Obj8" ADD CONSTRAINT "Obj8_id_obj9_fkey" FOREIGN KEY ("id_obj9") REFERENCES "Obj9"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Obj9" ADD CONSTRAINT "Obj9_id_obj10_fkey" FOREIGN KEY ("id_obj10") REFERENCES "Obj10"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
