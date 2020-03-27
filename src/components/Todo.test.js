import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Todo from './Todo'

const todo1 = {id: 1, name: 'Go to the supermarket', complete: true}
const todo2 = {id: 1, name: 'Buy a car', complete: false}

test('components defined', () => {

    const component = render( <Todo todo={todo1} /> )

    const checkbox = component.getByTestId('box')
    const deleteButton = component.getByTestId('delete')
    
    expect(checkbox).toBeDefined()
    expect(deleteButton).toBeDefined()

})


test('renders todo name', () => {

    const expected = "Go to the supermarket"
    const component = render( <Todo todo={todo1} /> )
    expect(component.container).toHaveTextContent(expected)

})

test('checked box', () => {

    const component = render( <Todo todo={todo1} /> )
    const checkbox  = component.getByTestId('box')
    expect(checkbox).toBeChecked()
    
})

test('unchecked box', () => {

    const component = render( <Todo todo={todo2} /> )
    const checkbox  = component.getByTestId('box')
    expect(checkbox).not.toBeChecked()
    
})

test('deletebutton clicking', () => {

    const mockHandlerDelete = jest.fn()

    const component = render( <Todo todo={todo2} onDeleteTodos={mockHandlerDelete}/> )
    const deleteButton = component.getByTestId('delete')

    fireEvent.click(deleteButton)

    expect(mockHandlerDelete.mock.calls.length).toBe(1)

})


