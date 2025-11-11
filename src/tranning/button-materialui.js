import React from 'react';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

function IconExample() {
  return (
    <div>
      <Button 
        variant="contained" 
        color="error"
        startIcon={<DeleteIcon />}
      >
        Удалить
      </Button>
      
      <Button 
        variant="contained" 
        color="primary"
        endIcon={<SendIcon />}
        sx={{ marginLeft: 2 }}
      >
        Отправить
      </Button>
    </div>
  );
}

export default IconExample;