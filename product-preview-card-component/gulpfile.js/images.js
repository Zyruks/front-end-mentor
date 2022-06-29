"use strict";
// list of dependence
const { src, dest } = require("gulp");

const responsive = require("gulp-sharp-responsive");
const size = require("gulp-size");

/**
 * It takes all the images in the `src/assets` folder, creates a bunch of different sizes of them, and
 * then outputs them to the `public/assets` folder
 * @returns A function that will be called by the gulp task runner.
 */
function imageCompiler() {
  return src("src/assets/**/*.{jpg,png,gif,webp,avif,heif,tiff}")
    .pipe(
      responsive({
        formats: [
          {
            width: (metadata) => Math.trunc(metadata.width * 0.25),
            rename: { suffix: "-sm" },
            format: "jpeg",
            jpegOptions: { quality: 90, progressive: true },
          },
          {
            width: (metadata) => Math.trunc(metadata.width * 0.5),
            rename: { suffix: "-md" },
            format: "jpeg",
            jpegOptions: { quality: 90, progressive: true },
          },
          {
            width: (metadata) => Math.trunc(metadata.width * 0.75),
            rename: { suffix: "-lg" },
            format: "jpeg",
            jpegOptions: { quality: 90, progressive: true },
          },
          {
            width: (metadata) => Math.trunc(metadata.width * 1),
            rename: { suffix: "-og" },
            format: "jpeg",
            jpegOptions: { quality: 90, progressive: true },
          },
          {
            width: (metadata) => Math.trunc(metadata.width * 0.25),
            rename: { suffix: "-sm" },
            format: "webp",
            webpOptions: { quality: 90, progressive: true },
          },
          {
            width: (metadata) => Math.trunc(metadata.width * 0.5),
            rename: { suffix: "-md" },
            format: "webp",
            webpOptions: { quality: 90, progressive: true },
          },

          {
            width: (metadata) => Math.trunc(metadata.width * 0.75),
            format: "webp",
            rename: { suffix: "-lg" },
            webpOptions: { quality: 90, progressive: true },
          },

          {
            width: (metadata) => Math.trunc(metadata.width * 1),
            format: "webp",
            rename: { suffix: "-lg" },
            webpOptions: { quality: 90, progressive: true },
          },
        ],
      })
    )
    .pipe(size({ title: "images", showFiles: true, pretty: true }))
    .pipe(dest("public/assets"));
}

exports.imageTask = imageCompiler;
