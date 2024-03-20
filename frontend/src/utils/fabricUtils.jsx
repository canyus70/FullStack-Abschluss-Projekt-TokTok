// import { fabric } from "fabric";
import React, { useRef, useEffect } from "react";

export const FabricCanvas = ({ onCanvasReady }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current);
    onCanvasReady(canvas);

    canvas.setHeight(600);
    canvas.setWidth(800);
  }, [onCanvasReady]);

  return <canvas ref={canvasRef} />;
};

export const FILTERS = {
  none: () => new fabric.Image.filters.RemoveColor(),
  grayscale: () => new fabric.Image.filters.Grayscale(),
  sepia: () => new fabric.Image.filters.Sepia(),
  invert: () => new fabric.Image.filters.Invert(),
  saturation: (value) =>
    new fabric.Image.filters.Saturation({ saturation: value }),
};

export const applyFilterToImage = (image, filterName) => {
  if (!image || !filterName) return;

  const filterFunction = FILTERS[filterName];
  if (filterFunction) {
    image.filters = [filterFunction()];
    image.applyFilters();
  }
};

export const convertDataURLToBlob = async (dataURL) => {
  const response = await fetch(dataURL);
  const blob = await response.blob();
  return blob;
};
