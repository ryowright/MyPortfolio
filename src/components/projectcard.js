import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import "./styles/projectcard.css"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import { Grid } from '@mui/material';

const projectCardTheme = createTheme({
  palette: {
    secondary: {
      main: grey[500],
    }
  }
})

export default function ProjectCard({ project, w=400, h=500, fontSize='16px', buttonSize='medium' }) {
  return (
    <ThemeProvider theme={projectCardTheme}>
      <Card sx={{ width: w, height: h }} >
        <CardMedia
          sx={{ height: 140 }}
          image={project.image}
          title=""
          />
        <div style={{display: 'flex', flexDirection: 'column', height: '260px'}}>
          <CardContent sx={{ flex: 1 }}>
            <Typography gutterBottom variant="h5" component="div">
              {project.title}
            </Typography>
            <Typography fontSize={fontSize} color="text.secondary">
              {project.description}
            </Typography>
          </CardContent>
          <div className='technologies'>
            {project.tech.map((item, index)=>{
              return (
                <div style={{padding: '5px'}}>
                  <Chip sx={{ color: 'white' }} label={item} color='secondary' />
                </div>
              )
            })}
          </div>
          <div className='card-buttons'>
            <Grid container justifyContent='center' alignItems='center'>
              <Grid item margin='0 10px'>
                <a href={project.demoLink} target="_blank">
                  <Button 
                    size={buttonSize} 
                    variant="contained"
                    >
                      Project Demo
                  </Button>
                </a>
              </Grid>
              <Grid item margin='0 10px'>
                {project.githubRepo !== "" ?
                  <a href={project.githubRepo} target="_blank">
                    <Button 
                    size={buttonSize}  
                    variant="contained"
                    >Github Repository</Button>
                  </a>
                  : null}
              </Grid>
            </Grid>
          </div>
        </div>
      </Card>
    </ThemeProvider>
  )
}