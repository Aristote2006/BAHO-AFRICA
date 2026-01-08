import React, { useState, useEffect } from 'react';
import { Container, Box, Typography, Button, Grid, Paper, Slide } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { ArrowForward } from '@mui/icons-material';

const HeroSection = styled(Box)(({ theme }) => ({
  height: '90vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  overflow: 'hidden',
  color: 'white',
  textAlign: 'center',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(13, 27, 42, 0.7)',
    zIndex: 1,
  },
}));

const SlideshowImage = styled(Box)(({ src }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundImage: `url(${src})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  opacity: 0,
  animation: 'fadeInOut 15s infinite',
  '&:nth-of-type(1)': {
    animationDelay: '0s',
    opacity: 1,
  },
  '&:nth-of-type(2)': {
    animationDelay: '5s',
  },
  '&:nth-of-type(3)': {
    animationDelay: '10s',
  },
}));

const AnimatedText = styled('span')(({ theme }) => ({
  display: 'inline-block',
  animation: 'bounce 2s infinite',
  color: '#D4AF37',
}));

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroImages = [
    'https://source.unsplash.com/1600x900/?african-art,culture',
    'https://source.unsplash.com/1600x900/?african-people,community',
    'https://source.unsplash.com/1600x900/?african-music,dance'
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [heroImages.length]);
  return (
    <div>
      {/* Hero Section */}
      <HeroSection>
        {heroImages.map((img, index) => (
          <SlideshowImage 
            key={index} 
            src={img} 
            style={{
              opacity: currentSlide === index ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
              zIndex: currentSlide === index ? 2 : 0,
            }}
          />
        ))}
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 3 }}>
          <Box py={5}>
            <Typography variant="h1" component="h1" gutterBottom className="text-fade-in-up" style={{ animationDelay: '0.2s' }} sx={{ fontWeight: 700, mb: 3, textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
              BAHO AFRICA
            </Typography>
            <Typography variant="h3" component="h2" gutterBottom className="text-fade-in-up" style={{ animationDelay: '0.4s' }} sx={{ fontWeight: 500, mb: 4, maxWidth: '800px', mx: 'auto', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
              Empowering <AnimatedText className="text-pulse">Talent</AnimatedText>, Inspiring <AnimatedText className="text-pulse">Africa</AnimatedText>
            </Typography>
            <Typography variant="h5" className="text-fade-in-up" style={{ animationDelay: '0.6s' }} sx={{ mb: 4, maxWidth: '800px', mx: 'auto', color: '#D4AF37', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
              Creative and Culture Hub based in Rwanda, empowering youth, artists, refugees, women, and creatives with disabilities through arts, innovation, culture, entrepreneurship, and education.
            </Typography>
            <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
              <Button 
                component={Link} 
                to="/about" 
                variant="contained" 
                size="large" 
                sx={{ 
                  backgroundColor: '#D4AF37', 
                  color: '#0D1B2A',
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  '&:hover': {
                    backgroundColor: '#b8972d',
                  }
                }}
              >
                About Us
              </Button>
              <Button 
                component={Link} 
                to="/projects" 
                variant="outlined" 
                size="large" 
                sx={{ 
                  borderColor: '#D4AF37', 
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  '&:hover': {
                    backgroundColor: 'rgba(212, 175, 55, 0.1)',
                    borderColor: '#D4AF37',
                  }
                }}
              >
                Our Projects
              </Button>
              <Button 
                component={Link} 
                to="/contact" 
                variant="outlined" 
                size="large" 
                sx={{ 
                  borderColor: '#D4AF37', 
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  '&:hover': {
                    backgroundColor: 'rgba(212, 175, 55, 0.1)',
                    borderColor: '#D4AF37',
                  }
                }}
              >
                Contact Us
              </Button>
            </Box>
          </Box>
        </Container>
      </HeroSection>

      {/* About Section */}
      <Box py={8} sx={{ backgroundColor: '#F5F5F5' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" component="h2" className="text-slide-in-left" style={{ animationDelay: '0.1s' }} gutterBottom sx={{ color: '#0D1B2A', fontWeight: 600 }}>
                About BAHO AFRICA
              </Typography>
              <Typography variant="h5" className="text-slide-in-left" style={{ animationDelay: '0.2s' }} sx={{ color: '#5D5D5D', mb: 3 }}>
                Empowering communities through creativity and innovation
              </Typography>
              <Typography variant="body1" className="text-slide-in-left" style={{ animationDelay: '0.3s' }} paragraph sx={{ color: '#5D5D5D', lineHeight: 1.8 }}>
                BAHO AFRICA is a Creative and Culture Hub based in Rwanda, dedicated to empowering youth, artists, refugees, women, and creatives with disabilities. Through arts, innovation, culture, entrepreneurship, and education, we foster an environment where talent can flourish and contribute to the development of our communities.
              </Typography>
              <Typography variant="body1" className="text-slide-in-left" style={{ animationDelay: '0.4s' }} paragraph sx={{ color: '#5D5D5D', lineHeight: 1.8 }}>
                Our mission is to create sustainable opportunities for creative individuals, providing them with the tools, resources, and platforms they need to showcase their talents and build meaningful careers in the creative economy.
              </Typography>
              <Button 
                className="text-slide-in-left"
                style={{ animationDelay: '0.5s' }}
                component={Link} 
                to="/about" 
                variant="contained" 
                endIcon={<ArrowForward />}
                sx={{ 
                  backgroundColor: '#0D1B2A', 
                  color: 'white',
                  mt: 2,
                  '&:hover': {
                    backgroundColor: '#1B3A5F',
                  }
                }}
              >
                Learn More
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper 
                elevation={3} 
                className="glass-effect"
                sx={{ 
                  height: '400px', 
                  backgroundImage: 'url(https://source.unsplash.com/1600x900/?african-people,community)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: 2,
                  border: '1px solid rgba(255,255,255,0.2)'
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* What We Do Section */}
      <Box py={8}>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2" className="text-fade-in-up" style={{ animationDelay: '0.1s' }} align="center" gutterBottom sx={{ color: '#0D1B2A', fontWeight: 600, mb: 6 }}>
            What We Do
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Paper 
                elevation={3} 
                className="glass-effect"
                sx={{ 
                  p: 4, 
                  height: '100%',
                  textAlign: 'center',
                  borderRadius: 2,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 20px rgba(0,0,0,0.15)',
                  }
                }}
              >
                <Box 
                  component="img" 
                  className="text-fade-in-up"
                  style={{ animationDelay: '0.2s' }}
                  src="https://source.unsplash.com/48x48/?music,performance" 
                  alt="Creative & Performing Arts" 
                  sx={{ width: 64, height: 64, borderRadius: '50%', mb: 2 }}
                />
                <Typography variant="h5" component="h3" className="text-fade-in-up" style={{ animationDelay: '0.3s' }} gutterBottom sx={{ color: '#0D1B2A', fontWeight: 600 }}>
                  Creative & Performing Arts
                </Typography>
                <Typography variant="body1" className="text-fade-in-up" style={{ animationDelay: '0.4s' }} sx={{ color: '#5D5D5D' }}>
                  We provide platforms for artists to showcase their talents through performances, exhibitions, and cultural events.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper 
                elevation={3} 
                className="glass-effect"
                sx={{ 
                  p: 4, 
                  height: '100%',
                  textAlign: 'center',
                  borderRadius: 2,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 20px rgba(0,0,0,0.15)',
                  }
                }}
              >
                <Box 
                  component="img" 
                  className="text-fade-in-up"
                  style={{ animationDelay: '0.2s' }}
                  src="https://source.unsplash.com/48x48/?heritage,culture" 
                  alt="Cultural Heritage & Innovation" 
                  sx={{ width: 64, height: 64, borderRadius: '50%', mb: 2 }}
                />
                <Typography variant="h5" component="h3" className="text-fade-in-up" style={{ animationDelay: '0.3s' }} gutterBottom sx={{ color: '#0D1B2A', fontWeight: 600 }}>
                  Cultural Heritage & Innovation
                </Typography>
                <Typography variant="body1" className="text-fade-in-up" style={{ animationDelay: '0.4s' }} sx={{ color: '#5D5D5D' }}>
                  We preserve and promote African cultural heritage while fostering innovation in traditional arts and crafts.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper 
                elevation={3} 
                className="glass-effect"
                sx={{ 
                  p: 4, 
                  height: '100%',
                  textAlign: 'center',
                  borderRadius: 2,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 20px rgba(0,0,0,0.15)',
                  }
                }}
              >
                <Box 
                  component="img" 
                  className="text-fade-in-up"
                  style={{ animationDelay: '0.2s' }}
                  src="https://source.unsplash.com/48x48/?education,learning" 
                  alt="Education & Capacity Building" 
                  sx={{ width: 64, height: 64, borderRadius: '50%', mb: 2 }}
                />
                <Typography variant="h5" component="h3" className="text-fade-in-up" style={{ animationDelay: '0.3s' }} gutterBottom sx={{ color: '#0D1B2A', fontWeight: 600 }}>
                  Education & Capacity Building
                </Typography>
                <Typography variant="body1" className="text-fade-in-up" style={{ animationDelay: '0.4s' }} sx={{ color: '#5D5D5D' }}>
                  We offer training programs and workshops to enhance skills in various creative fields and entrepreneurship.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Projects Section Preview */}
      <Box py={8} sx={{ backgroundColor: '#F5F5F5' }}>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2" className="text-fade-in-up" style={{ animationDelay: '0.1s' }} align="center" gutterBottom sx={{ color: '#0D1B2A', fontWeight: 600, mb: 6 }}>
            Our Projects
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Paper 
                elevation={3} 
                className="glass-effect"
                sx={{ 
                  p: 3, 
                  height: '100%',
                  borderRadius: 2,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 20px rgba(0,0,0,0.15)',
                  }
                }}
              >
                <Box 
                  component="img" 
                  className="text-fade-in-up"
                  style={{ animationDelay: '0.2s' }}
                  src="https://source.unsplash.com/300x200/?performing-arts,theater" 
                  alt="Baho Performing Arts" 
                  sx={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: 2, mb: 2 }}
                />
                <Typography variant="h5" component="h3" className="text-fade-in-up" style={{ animationDelay: '0.3s' }} gutterBottom sx={{ color: '#0D1B2A', fontWeight: 600 }}>
                  Baho Performing Arts
                </Typography>
                <Typography variant="body2" className="text-fade-in-up" style={{ animationDelay: '0.4s' }} sx={{ color: '#5D5D5D' }}>
                  Showcasing African performing arts through theater, dance, and music performances.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper 
                elevation={3} 
                className="glass-effect"
                sx={{ 
                  p: 3, 
                  height: '100%',
                  borderRadius: 2,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 20px rgba(0,0,0,0.15)',
                  }
                }}
              >
                <Box 
                  component="img" 
                  className="text-fade-in-up"
                  style={{ animationDelay: '0.2s' }}
                  src="https://source.unsplash.com/300x200/?talent,development" 
                  alt="Talent Gear Program" 
                  sx={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: 2, mb: 2 }}
                />
                <Typography variant="h5" component="h3" className="text-fade-in-up" style={{ animationDelay: '0.3s' }} gutterBottom sx={{ color: '#0D1B2A', fontWeight: 600 }}>
                  Talent Gear Program
                </Typography>
                <Typography variant="body2" className="text-fade-in-up" style={{ animationDelay: '0.4s' }} sx={{ color: '#5D5D5D' }}>
                  A comprehensive talent development program for emerging artists and creatives.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper 
                elevation={3} 
                className="glass-effect"
                sx={{ 
                  p: 3, 
                  height: '100%',
                  borderRadius: 2,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 20px rgba(0,0,0,0.15)',
                  }
                }}
              >
                <Box 
                  component="img" 
                  className="text-fade-in-up"
                  style={{ animationDelay: '0.2s' }}
                  src="https://source.unsplash.com/300x200/?event,cultural" 
                  alt="Baho Events" 
                  sx={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: 2, mb: 2 }}
                />
                <Typography variant="h5" component="h3" className="text-fade-in-up" style={{ animationDelay: '0.3s' }} gutterBottom sx={{ color: '#0D1B2A', fontWeight: 600 }}>
                  Baho Events
                </Typography>
                <Typography variant="body2" className="text-fade-in-up" style={{ animationDelay: '0.4s' }} sx={{ color: '#5D5D5D' }}>
                  Organizing cultural events, festivals, and exhibitions to promote African arts and culture.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
          <Box textAlign="center" mt={6}>
            <Button 
              className="text-fade-in-up"
              style={{ animationDelay: '0.5s' }}
              component={Link} 
              to="/projects" 
              variant="contained" 
              size="large"
              sx={{ 
                backgroundColor: '#D4AF37', 
                color: '#0D1B2A',
                px: 4,
                '&:hover': {
                  backgroundColor: '#b8972d',
                }
              }}
            >
              View All Projects
            </Button>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default HomePage;