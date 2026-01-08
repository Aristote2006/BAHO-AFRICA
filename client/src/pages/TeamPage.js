import React from 'react';
import { Container, Box, Typography, Grid, Card, CardContent, CardMedia, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  borderRadius: 16,
  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 15px 40px rgba(0,0,0,0.15)',
  },
}));

const TeamPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Terri Mayhan',
      position: 'Founder & CEO',
      bio: 'Visionary leader with over 15 years of experience in cultural development and creative industries. Founded BAHO AFRICA to empower African talent.',
      image: 'https://source.unsplash.com/300x300/?portrait,woman,business'
    },
    {
      id: 2,
      name: 'Ndatimana Fabrice',
      position: 'Operating Manager',
      bio: 'Operations expert with a background in project management and organizational development. Ensures our programs run smoothly and efficiently.',
      image: 'https://source.unsplash.com/300x300/?portrait,man,business'
    },
    {
      id: 3,
      name: 'Rukundo Heritier',
      position: 'Communication Manager',
      bio: 'Communication specialist with expertise in media relations and digital marketing. Connects our work with communities and stakeholders.',
      image: 'https://source.unsplash.com/300x300/?portrait,man,media'
    },
    {
      id: 4,
      name: 'Umurungi Natasha',
      position: 'Project Coordinator',
      bio: 'Project management professional with experience in cultural programs and community engagement. Coordinates our diverse range of initiatives.',
      image: 'https://source.unsplash.com/300x300/?portrait,woman,manager'
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
          background: 'linear-gradient(rgba(13, 27, 42, 0.8), rgba(13, 27, 42, 0.8)), url(https://source.unsplash.com/1600x900/?team,leadership) center/cover no-repeat',
          color: 'white',
          textAlign: 'center'
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" className="text-fade-in-up" style={{ animationDelay: '0.1s' }} gutterBottom sx={{ fontWeight: 700 }}>
            Our Team
          </Typography>
          <Typography variant="h5" className="text-fade-in-up" style={{ animationDelay: '0.2s' }} sx={{ maxWidth: '800px', mx: 'auto', color: '#D4AF37' }}>
            Dedicated professionals committed to empowering communities through creativity and culture
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" className="text-fade-in-up" style={{ animationDelay: '0.1s' }} align="center" gutterBottom sx={{ color: '#0D1B2A', fontWeight: 600, mb: 8 }}>
          Meet Our Leadership
        </Typography>
        
        <Grid container spacing={6}>
          {teamMembers.map((member) => (
            <Grid item xs={12} sm={6} md={6} lg={3} key={member.id}>
              <StyledCard className="glass-effect">
                <CardMedia
                  component="img"
                  height="250"
                  image={member.image}
                  alt={member.name}
                  sx={{ objectFit: 'cover', pt: 2, px: 2, width: '80%', height: 'auto', borderRadius: '50%', mx: 'auto' }}
                />
                <CardContent sx={{ flexGrow: 1, pt: 3 }}>
                  <Typography gutterBottom variant="h5" component="h3" className="text-fade-in-up" style={{ animationDelay: '0.2s' }} sx={{ color: '#0D1B2A', fontWeight: 600 }}>
                    {member.name}
                  </Typography>
                  <Typography variant="h6" className="text-fade-in-up" style={{ animationDelay: '0.3s' }} color="secondary" gutterBottom sx={{ fontWeight: 600 }}>
                    {member.position}
                  </Typography>
                  <Typography variant="body2" className="text-fade-in-up" style={{ animationDelay: '0.4s' }} sx={{ color: '#5D5D5D', lineHeight: 1.6 }}>
                    {member.bio}
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>

        {/* Team Values */}
        <Box sx={{ mt: 12, textAlign: 'center' }}>
          <Typography variant="h3" component="h2" className="text-fade-in-up" style={{ animationDelay: '0.1s' }} gutterBottom sx={{ color: '#0D1B2A', fontWeight: 600, mb: 8 }}>
            Our Values
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box sx={{ p: 3 }}>
                <Avatar 
                  className="text-fade-in-up"
                  style={{ animationDelay: '0.2s' }}
                  sx={{ 
                    width: 64, 
                    height: 64, 
                    backgroundColor: '#D4AF37', 
                    color: '#0D1B2A', 
                    mx: 'auto', 
                    mb: 2,
                    fontSize: '1.5rem'
                  }}
                >
                  C
                </Avatar>
                <Typography variant="h5" component="h3" className="text-fade-in-up" style={{ animationDelay: '0.3s' }} gutterBottom sx={{ color: '#0D1B2A', fontWeight: 600 }}>
                  Creativity
                </Typography>
                <Typography variant="body2" className="text-fade-in-up" style={{ animationDelay: '0.4s' }} sx={{ color: '#5D5D5D' }}>
                  We foster creative expression and innovation in all our endeavors, encouraging new approaches to cultural preservation and artistic expression.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ p: 3 }}>
                <Avatar 
                  className="text-fade-in-up"
                  style={{ animationDelay: '0.2s' }}
                  sx={{ 
                    width: 64, 
                    height: 64, 
                    backgroundColor: '#D4AF37', 
                    color: '#0D1B2A', 
                    mx: 'auto', 
                    mb: 2,
                    fontSize: '1.5rem'
                  }}
                >
                  I
                </Avatar>
                <Typography variant="h5" component="h3" className="text-fade-in-up" style={{ animationDelay: '0.3s' }} gutterBottom sx={{ color: '#0D1B2A', fontWeight: 600 }}>
                  Inclusion
                </Typography>
                <Typography variant="body2" className="text-fade-in-up" style={{ animationDelay: '0.4s' }} sx={{ color: '#5D5D5D' }}>
                  We are committed to ensuring equal opportunities for all, with special attention to marginalized communities including women, refugees, and people with disabilities.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ p: 3 }}>
                <Avatar 
                  className="text-fade-in-up"
                  style={{ animationDelay: '0.2s' }}
                  sx={{ 
                    width: 64, 
                    height: 64, 
                    backgroundColor: '#D4AF37', 
                    color: '#0D1B2A', 
                    mx: 'auto', 
                    mb: 2,
                    fontSize: '1.5rem'
                  }}
                >
                  E
                </Avatar>
                <Typography variant="h5" component="h3" className="text-fade-in-up" style={{ animationDelay: '0.3s' }} gutterBottom sx={{ color: '#0D1B2A', fontWeight: 600 }}>
                  Excellence
                </Typography>
                <Typography variant="body2" className="text-fade-in-up" style={{ animationDelay: '0.4s' }} sx={{ color: '#5D5D5D' }}>
                  We strive for the highest standards in all our programs and services, ensuring maximum impact for the communities we serve.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default TeamPage;