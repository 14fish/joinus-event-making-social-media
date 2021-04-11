import React from 'react'
import { Input } from 'antd';
import './SearchForm.css';

const { Search } = Input;

export function SearchForm() {
    return (
        <div>
            <Search
                className='search-form'
                placeholder="input search text"
                onSearch={value => console.log(value)}
            />
        </div>
    )
}
