import React from 'react';
import { Container, Box, Typography, Grid, Paper, Card, CardContent, CardMedia, CardActions, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: 16,
  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 15px 40px rgba(0,0,0,0.15)',
  },
}));

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "Baho Performing Arts",
      description: "Showcasing African performing arts through theater, dance, and music performances. This program provides a platform for local artists to showcase their talents and connect with audiences.",
      image: "https://source.unsplash.com/600x400/?theater,performance",
      category: "Performing Arts"
    },
    {
      id: 2,
      title: "Talent Gear Program",
      description: "A comprehensive talent development program for emerging artists and creatives. The program includes mentorship, skills training, and exhibition opportunities.",
      image: "https://source.unsplash.com/600x400/?talent,development",
      category: "Education"
    },
    {
      id: 3,
      title: "Baho Events",
      description: "Organizing cultural events, festivals, and exhibitions to promote African arts and culture. These events provide networking opportunities and exposure for artists.",
      image: "https://source.unsplash.com/600x400/?event,cultural",
      category: "Cultural Events"
    },
    {
      id: 4,
      title: "Heritage Preservation Initiative",
      description: "A program focused on documenting and preserving traditional African art forms, crafts, and cultural practices for future generations.",
      image: "https://source.unsplash.com/600x400/?heritage,tradition",
      category: "Heritage"
    },
    {
      id: 5,
      title: "Creative Entrepreneurship Program",
      description: "Training and support for creative professionals to build sustainable businesses in the creative economy. Includes business development and marketing training.",
      image: "https://source.unsplash.com/600x400/?entrepreneur,business",
      category: "Entrepreneurship"
    },
    {
      id: 6,
      title: "Inclusive Arts Project",
      description: "Specialized programs for artists with disabilities, refugees, and other marginalized communities, ensuring equal access to creative opportunities.",
      image: "https://source.unsplash.com/600x400/?inclusive,community",
      category: "Inclusion"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <Box 
        sx={{ 
          height: '40vh', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          background: 'linear-gradient(rgba(13, 27, 42, 0.8), rgba(13, 27, 42, 0.8)), url(https://source.unsplash.com/1600x900/?african-projects,creative) center/cover no-repeat',
          color: 'white',
          textAlign: 'center'
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" className="text-fade-in-up" style={{ animationDelay: '0.1s' }} gutterBottom sx={{ fontWeight: 700 }}>
            Our Projects
          </Typography>
          <Typography variant="h5" className="text-fade-in-up" style={{ animationDelay: '0.2s' }} sx={{ maxWidth: '800px', mx: 'auto', color: '#D4AF37' }}>
            Empowering communities through diverse creative initiatives
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" className="text-fade-in-up" style={{ animationDelay: '0.1s' }} align="center" gutterBottom sx={{ color: '#0D1B2A', fontWeight: 600, mb: 8 }}>
          Current Projects
        </Typography>
        
        <Grid container spacing={6}>
          {projects.map((project) => (
            <Grid item xs={12} md={6} lg={4} key={project.id}>
              <StyledCard className="glass-effect">
                <CardMedia
                  component="img"
                  height="250"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="overline" className="text-fade-in-up" style={{ animationDelay: '0.2s' }} gutterBottom sx={{ color: '#D4AF37', fontWeight: 600, display: 'inline-block', pb: 1 }}>
                    {project.category}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="h3" className="text-fade-in-up" style={{ animationDelay: '0.3s' }} sx={{ color: '#0D1B2A', fontWeight: 600 }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" className="text-fade-in-up" style={{ animationDelay: '0.4s' }} sx={{ color: '#5D5D5D', lineHeight: 1.6 }}>
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'flex-end', padding: 2 }}>
                  <Button 
                    size="small" 
                    className="text-fade-in-up"
                    style={{ animationDelay: '0.5s' }}
                    component={Link} 
                    to={`/projects/${project.id}`}
                    sx={{ 
                      color: '#0D1B2A',
                      borderColor: '#0D1B2A',
                      '&:hover': {
                        backgroundColor: '#0D1B2A',
                        color: 'white',
                      }
                    }}
                  >
                    Learn More
                  </Button>
                </CardActions>
              </StyledCard>
            </Grid>
          ))}
        </Grid>

        {/* Project Categories */}
        <Box sx={{ mt: 10 }}>
          <Typography variant="h3" component="h2" className="text-fade-in-up" style={{ animationDelay: '0.1s' }} align="center" gutterBottom sx={{ color: '#0D1B2A', fontWeight: 600, mb: 6 }}>
            Project Categories
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {['Performing Arts', 'Education', 'Cultural Events', 'Heritage', 'Entrepreneurship', 'Inclusion'].map((category, index) => (
              <Grid item key={index}>
                <Paper 
                  elevation={2} 
                  className="glass-effect"
                  sx={{ 
                    px: 3, 
                    py: 1.5, 
                    borderRadius: 20,
                    backgroundColor: index % 2 === 0 ? 'rgba(13, 27, 42, 0.7)' : 'rgba(212, 175, 55, 0.7)',
                    color: index % 2 === 0 ? 'white' : '#0D1B2A',
                    border: '1px solid rgba(255,255,255,0.2)'
                  }}
                >
                  <Typography variant="body1" className="text-fade-in-up" style={{ animationDelay: '0.2s' }} sx={{ fontWeight: 500 }}>
                    {category}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default ProjectsPage;