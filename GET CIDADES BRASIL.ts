'use server';

export const getEstados = async () => {
  'use server';
  const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados', {
    headers: {
      'Content-Type': 'application/json',
    },
    next: {
      revalidate: 3600,
    },
  });
  const data = await response.json();
  return data;
};
