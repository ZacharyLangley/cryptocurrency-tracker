import React from 'react';
import {AppContext} from '../App/AppProvider';

export default function({ name, children }) {
    return (
        <AppContext.Consumer>
            {
                ({page}) => {
                    if(page !== name) return null
                    else {
                        return (
                            <div>
                                {children}
                            </div>
                        )
                    }
                }
            }
        </AppContext.Consumer>
    )
}