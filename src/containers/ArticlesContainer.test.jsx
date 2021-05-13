import dotenv from 'dotenv';
dotenv.config();
import React from 'react'
import {screen, render} from '@testing-library/react'
import ArticlesContainer from './ArticlesContainer'

describe('ArticlesContainer', ()=>{
    it('should render a list of articles', async()=>{
        render(<ArticlesContainer/>)

        screen.getByText('Loading...')
    })
})