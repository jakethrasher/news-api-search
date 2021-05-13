import dotenv from 'dotenv';
dotenv.config();
import React from 'react'
import {screen, render, findByRole, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ArticlesContainer from './ArticlesContainer'

describe('ArticlesContainer', ()=>{
    it('should render a list of articles', async()=>{
        render(<ArticlesContainer/>)

        screen.getByText('Loading...')

        const ul = await screen.findByRole('list',{name:'articles'})
        expect(ul).not.toBeEmptyDOMElement()

        const input = await screen.findByLabelText('Search By Keyword')
        userEvent.type(input,'Bitcoin')

        const submitButton = await screen.findByRole('button',{name: 'search-articles'})
        userEvent.click(submitButton)
        
        expect(ul).toMatchSnapshot();
    })
})