/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import StartApp from '../components/StartApp';
import '@testing-library/jest-dom';

describe('test en el funcionamiento de la calculadora', () => {
  test('La suma funciona bien', () => {
    const dom = render(<StartApp />);

    const num1 = dom.container.querySelector('#id7');
    const suma = dom.container.querySelector('#idsuma');
    const num2 = dom.container.querySelector('#id3');
    const equal = dom.container.querySelector('#idigual');

    fireEvent.click(num1);
    fireEvent.click(suma);
    fireEvent.click(num2);
    fireEvent.click(equal);

    const pantalla = dom.container.querySelector('.display').innerHTML;
    expect(pantalla).toBe('10');
  });

  test('La resta funciona bien', () => {
    const dom = render(<StartApp />);

    const num1 = dom.container.querySelector('#id9');
    const suma = dom.container.querySelector('#idresta');
    const num2 = dom.container.querySelector('#id4');
    const equal = dom.container.querySelector('#idigual');

    fireEvent.click(num1);
    fireEvent.click(suma);
    fireEvent.click(num2);
    fireEvent.click(equal);

    const pantalla = dom.container.querySelector('.display').innerHTML;
    expect(pantalla).toBe('5');
  });

  test('La division funciona bien', () => {
    const dom = render(<StartApp />);

    const num1 = dom.container.querySelector('#id8');
    const suma = dom.container.querySelector('#iddivision');
    const num2 = dom.container.querySelector('#id2');
    const equal = dom.container.querySelector('#idigual');

    fireEvent.click(num1);
    fireEvent.click(suma);
    fireEvent.click(num2);
    fireEvent.click(equal);

    const pantalla = dom.container.querySelector('.display').innerHTML;
    expect(pantalla).toBe('4');
  });

  test('La multiplicacion funciona bien', () => {
    const dom = render(<StartApp />);

    const num1 = dom.container.querySelector('#id7');
    const suma = dom.container.querySelector('#idmultiplicacion');
    const num2 = dom.container.querySelector('#id4');
    const equal = dom.container.querySelector('#idigual');

    fireEvent.click(num1);
    fireEvent.click(suma);
    fireEvent.click(num2);
    fireEvent.click(equal);

    const pantalla = dom.container.querySelector('.display').innerHTML;
    expect(pantalla).toBe('28');
  });

  test('Se muestra un error despues de 9 digitos', () => {
    const dom = render(<StartApp />);

    const num1 = dom.container.querySelector('#id1');
    const num2 = dom.container.querySelector('#id2');
    const num3 = dom.container.querySelector('#id3');
    const num4 = dom.container.querySelector('#id4');
    const num5 = dom.container.querySelector('#id5');
    const num6 = dom.container.querySelector('#id6');
    const num7 = dom.container.querySelector('#id7');
    const num8 = dom.container.querySelector('#id8');
    const num9 = dom.container.querySelector('#id9');
    const num10 = dom.container.querySelector('#id9');

    fireEvent.click(num1);
    fireEvent.click(num2);
    fireEvent.click(num3);
    fireEvent.click(num4);
    fireEvent.click(num5);
    fireEvent.click(num6);
    fireEvent.click(num7);
    fireEvent.click(num8);
    fireEvent.click(num9);
    fireEvent.click(num10);

    const pantalla = dom.container.querySelector('.display').innerHTML;
    expect(pantalla).toBe('NaN');
  });

  test('Se muestra un al realizar una operacion invalida', () => {
    const dom = render(<StartApp />);

    const num1 = dom.container.querySelector('#id9');
    const division = dom.container.querySelector('#iddivision');
    const num2 = dom.container.querySelector('#id0');
    const igual = dom.container.querySelector('#idigual');

    fireEvent.click(num1);
    fireEvent.click(division);
    fireEvent.click(num2);
    fireEvent.click(igual);

    const pantalla = dom.container.querySelector('.display').innerHTML;
    expect(pantalla).toBe('NaN');
  });

  test('El punto decimal funciona', () => {
    const dom = render(<StartApp />);

    const punto = dom.container.querySelector('#idpunto');
    const num = dom.container.querySelector('#id3');

    fireEvent.click(punto);
    fireEvent.click(num);
    fireEvent.click(punto);
    fireEvent.click(punto);
    fireEvent.click(num);

    const pantalla = dom.container.querySelector('.display').innerHTML;
    expect(pantalla).toBe('0,33');
  });

  test('El modulo funciona bien', () => {
    const dom = render(<StartApp />);

    const punto = dom.container.querySelector('#idmodulo');
    const num1 = dom.container.querySelector('#id9');
    const num2 = dom.container.querySelector('#id4');
    const igual = dom.container.querySelector('#idigual');

    fireEvent.click(num1);
    fireEvent.click(punto);
    fireEvent.click(num2);
    fireEvent.click(igual);

    const pantalla = dom.container.querySelector('.display').innerHTML;
    expect(pantalla).toBe('1');
  });

  test('La hora se muestra bien', () => {
    const dom = render(<StartApp />);

    const tiempo = dom.container.querySelector('.time').innerHTML;

    expect(typeof tiempo).toBe('string');
    expect(tiempo.length).toBe(5);
  });

  test('Los numeros cambian de signo bien', () => {
    const dom = render(<StartApp />);

    const num1 = dom.container.querySelector('#id9');
    const suma = dom.container.querySelector('#idsuma');
    const num2 = dom.container.querySelector('#id4');
    const igual = dom.container.querySelector('#idigual');
    const masmenos = dom.container.querySelector('#idmasmenos');

    fireEvent.click(num1);
    fireEvent.click(suma);
    fireEvent.click(num2);
    fireEvent.click(igual);
    fireEvent.click(masmenos);

    const pantalla = dom.container.querySelector('.display').innerHTML;
    expect(pantalla).toBe('-13');
  });
});

afterEach(cleanup);
