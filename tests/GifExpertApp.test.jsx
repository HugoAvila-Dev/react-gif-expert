import { render,screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas en GifExpertApp', () => { 
    const newCategory = 'One Punch';
    test('No debe actualizar el estado si la categoria es igual', () => { 
        //const onAddCategory = jest.fn();

        render(<GifExpertApp onAddCategory = {newCategory}/>);

screen.debug();


     });


 });