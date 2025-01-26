import React, { JSX } from 'react';

function NewReminder():JSX.Element {
    return (
        <form >
            <label htmlFor="title"></label>
            <input id='title' type="text" />
            <button type='submit'>Add reminder</button>
        </form>
    );
}

export default NewReminder;