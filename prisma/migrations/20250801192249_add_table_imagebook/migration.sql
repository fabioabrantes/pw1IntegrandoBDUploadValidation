-- CreateTable
CREATE TABLE "images_book" (
    "id" TEXT NOT NULL,
    "picture_name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "bookId" TEXT NOT NULL,

    CONSTRAINT "images_book_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "images_book" ADD CONSTRAINT "images_book_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "books"("id") ON DELETE CASCADE ON UPDATE CASCADE;
