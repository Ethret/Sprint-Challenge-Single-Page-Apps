import React from "react";

import { Form, Input } from 'reactstrap';

export default function SearchForm({ placeholder, handleChange }) {

  return (
    <section className="search-form">
      <Form>
        <Input
          name='search'
          type='search'
          placeholder={placeholder}
          onChange={handleChange}
        />
      </Form>
    </section>
  );
}
