import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import { purple } from '@mui/material/colors';
import "./styles/projectcard.css"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

const projectCardTheme = createTheme({
  palette: {
    secondary: {
      main: grey[500],
    }
  }
})

export default function ProjectCard({ project }) {
  return (
    <ThemeProvider theme={projectCardTheme}>
      <Card sx={{ maxWidth: 350 }}>
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
            <Typography variant="body2" color="text.secondary">
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
            <CardActions >
              <Button 
                size="small" 
                href={project.demoLink}
                target="_blank"
              >Demo</Button>
              {project.githubRepo !== "" ?
                <Button 
                  size="small" 
                  href={project.githubRepo}
                  target="_blank"
                >Repo</Button>
              : null}
            </CardActions>
          </div>
        </div>
      </Card>
    </ThemeProvider>
  )
}