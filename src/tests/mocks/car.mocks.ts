import {
  TCar,
  TCreateCarData,
  TUpdateCarData,
} from "../../interfaces/car.interfaces";

export const carMock: TCar = {
  id: "fe111d24-1b79-44df-931b-4c9fd5859014",
  name: "Car name",
  description: "Car description",
  brand: "Card brand",
  year: 2023,
  km: 10000,
};

export const createCarBodyMock: TCreateCarData = {
  name: "Car name",
  description: "Car description",
  brand: "Card brand",
  year: 2023,
  km: 10000,
};

export const createCarInvalidMock = {
  description: "Car description",
  brand: "Card brand",
  year: 2023,
  km: 10000,
};

export const createCarWrongMock = {
  name: "Car name",
  description: "Car description",
  brand: "Card brand",
  year: "2023",
  km: 10000,
};

export const updateCarBodyMock: TUpdateCarData = {
  name: "Carro",
  description: "Carro Novo",
  brand: "Marca de Carro",
};

export const createCarListMock: TCreateCarData[] = [
  {
    name: "Car name",
    description: "Car description",
    brand: "Card brand",
    year: 2023,
    km: 10000,
  },
  {
    name: "Car name 2",
    description: "Car description 2",
    brand: "Card brand 2",
    year: 2024,
    km: 12000,
  },
];

export const carListMock: TCar[] = [
  {
    id: "fe111d24-1b79-44df-931b-4c9fd5859014",
    name: "Car name",
    description: "Car description",
    brand: "Card brand",
    year: 2023,
    km: 10000,
  },
  {
    id: "72516d9a-df94-46d3-8d94-51a77fdb29e2",
    name: "Car name 2",
    description: "Car description 2",
    brand: "Card brand 2",
    year: 2024,
    km: 12000,
  },
];
