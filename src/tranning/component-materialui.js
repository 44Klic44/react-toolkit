import React from 'react';
import { Button, TextField, Box, Typography } from '@mui/material';
import { Send } from '@mui/icons-material';

function MyMaterialComponent() {
  const [text, setText] = React.useState('');

  const handleSubmit = () => {
    alert(`Вы отправили: ${text}`);
  };

  return (
    <Box 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        maxWidth: 400,
        margin: 'auto',
        padding: 4,
        boxShadow: 3,
        borderRadius: 2
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Пример формы
      </Typography>
      
      <TextField
        label="Введите текст"
        variant="outlined"
        value={text}
        onChange={(e) => setText(e.target.value)}
        fullWidth
      />
      
      <Button
        variant="contained"
        color="primary"
        endIcon={<Send />}
        onClick={handleSubmit}
        disabled={!text}
      >
        Отправить
      </Button>
    </Box>
  );
}

export default MyMaterialComponent;