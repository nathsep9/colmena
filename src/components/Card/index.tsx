import { useEffect } from "react";

interface DataItem {
  datos: {
    ventasPorRegion: {
      region: string;
      ventas: number;
    };
    usuariosRegistradosPorMes: {
      mes: string;
      usuarios: number;
    };
  };
}
export const Card = () => {
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("../../data.json");
        const data: DataItem = await response.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <h1>HOLA</h1>
    </div>
  );
};
