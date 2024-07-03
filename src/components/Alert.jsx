import React, { useEffect } from 'react';

export default function Alert({ message, onDismiss }) {
    useEffect(() => {
        alert(message);
        onDismiss();
    }, []);

    return null;
}
