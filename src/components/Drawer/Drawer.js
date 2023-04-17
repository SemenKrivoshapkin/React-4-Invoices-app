import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';


export default function TemporaryDrawer({ openDrawer, setOpenDrawer, Elem }) {
 
  const toggleDrawer = () => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
  };

 

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 600 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      
      <Elem  />
    </Box>
  );
  return (
    <div>
      <Drawer
        anchor={'left'}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        PaperProps={{ sx: { marginLeft: 12 } }}
      >
        {list('left')}
      </Drawer>
    </div>
  );
}

