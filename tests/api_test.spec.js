import {test,expect} from '@playwright/test';
import exp from 'constants';


//Get request for all user of Todos list

test('API GET Request',async({request}) => {
    const getResponse = await request.get('https://jsonplaceholder.typicode.com/todos')
    console.log(await getResponse.json())
    expect(getResponse.status()).toBe(200)
})

//POST request to create a new to do item with title and completed status

test('API POST Request' ,async({request}) => {
    const postResponse = await request.post('https://jsonplaceholder.typicode.com/todos', {
        data:{
            "UserId" : 10,
            "title": "Insert New User Item",
            "completed": true 
        }
    })
    console.log(await postResponse.json())
    expect(postResponse.status()).toBe(201)
})

//Put request to Update item for title or completed status

test('API Put Request' ,async({request}) => {
    const putResponse = await request.put('https://jsonplaceholder.typicode.com/todos/1', {
        data:{
            "userId": 1,
            "id": 1,
            "title": "Update Item Data",
            "completed": false
        }
    })
    console.log(await putResponse.json())
    expect(putResponse.status()).toBe(200)
})

//Delete request for all user of Todos list

test('API Delete Request',async({request}) => {
    const deleteResponse = await request.delete('https://jsonplaceholder.typicode.com/todos/1')
    expect(deleteResponse.status()).toBe(200)
})

//Error Handling for invalid request

test('API Error Handling Request',async({request}) => {
    const errorResponse = await request.get('https://jsonplaceholder.typicode.com/todo')
    expect(errorResponse.status()).toBe(404)
})
