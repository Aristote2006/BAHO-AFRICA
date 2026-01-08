import React from 'react';
import { Container, Box, Typography, Paper, Grid, Card, CardContent } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent, TimelineOppositeContent } from '@mui/lab';
import { styled } from '@mui/material/styles';

const StyledTimelineDot = styled(TimelineDot)(({ theme }) => ({
  backgroundColor: '#D4AF37',
  width: '24px',
  height: '24px',
}));

const MilestonesPage = () => {
  const milestones = [
    {
      year: '2023',
      events: [
        { date: 'January 2023', title: 'Organization Founded', description: 'BAHO AFRICA was officially established with a mission to empower creative communities in Rwanda.' },
        { date: 'March 2023', title: 'First Cultural Event', description: 'Launched our inaugural cultural festival, bringing together over 200 local artists and performers.' },
        { date: 'June 2023', title: 'Heritage Preservation Project', description: 'Started documenting traditional Rwandan art forms and cultural practices with community elders.' },
        { date: 'September 2023', title: 'Partnership with Local Schools', description: 'Initiated educational programs in 5 local schools to promote creative arts education.' }
      ]
    },
    {
      year: '2024',
      events: [
        { date: 'February 2024', title: 'Talent Gear Program Launch', description: 'Launched the comprehensive talent development program for emerging artists and creatives.' },
        { date: 'May 2024', title: 'Baho Performing Arts Festival', description: 'Hosted the first annual performing arts festival featuring 50+ artists from across East Africa.' },
        { date: 'August 2024', title: 'Inclusive Arts Initiative', description: 'Started specialized programs for artists with disabilities and refugees, ensuring equal access to creative opportunities.' },
        { date: 'November 2024', title: 'Creative Entrepreneurship Workshop', description: 'Organized a 3-month workshop series for 30+ creative professionals on building sustainable businesses.' }
      ]
    },
    {
      year: '2025',
      events: [
        { date: 'January 2025', title: 'Regional Expansion', description: 'Expanding our programs to include neighboring East African countries.' },
        { date: 'April 2025', title: 'Digital Platform Launch', description: 'Launching an online platform to showcase African artists and connect them with global audiences.' },
        { date: 'July 2025', title: 'International Collaboration', description: 'Partnering with cultural institutions in Europe to promote African arts and culture globally.' },
        { date: 'October 2025', title: 'Sustainable Funding Model', description: 'Implementing a sustainable funding model to ensure long-term impact of our programs.' }
      ]
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
          background: 'linear-gradient(rgba(13, 27, 42, 0.8), rgba(13, 27, 42, 0.8)), url(https://source.unsplash.com/1600x900/?timeline,achievements) center/cover no-repeat',
          color: 'white',
          textAlign: 'center'
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" className="text-fade-in-up" style={{ animationDelay: '0.1s' }} gutterBottom sx={{ fontWeight: 700 }}>
            Milestones & Impact
          </Typography>
          <Typography variant="h5" className="text-fade-in-up" style={{ animationDelay: '0.2s' }} sx={{ maxWidth: '800px', mx: 'auto', color: '#D4AF37' }}>
            Our journey of empowering communities through creativity and culture
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" className="text-fade-in-up" style={{ animationDelay: '0.1s' }} align="center" gutterBottom sx={{ color: '#0D1B2A', fontWeight: 600, mb: 8 }}>
          Our Journey
        </Typography>
        
        {milestones.map((milestone, index) => (
          <Box key={index} sx={{ mb: 10 }}>
            <Typography variant="h4" component="h3" className="text-fade-in-up" style={{ animationDelay: '0.1s' }} align="center" gutterBottom sx={{ color: '#0D1B2A', fontWeight: 600, mb: 4, color: '#D4AF37' }}>
              {milestone.year} Highlights
            </Typography>
            
            <Timeline position="alternate">
              {milestone.events.map((event, eventIndex) => (
                <TimelineItem key={eventIndex}>
                  <TimelineOppositeContent className="text-fade-in-up" style={{ animationDelay: '0.2s' }} sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span" sx={{ color: '#0D1B2A', fontWeight: 600 }}>
                      {event.date}
                    </Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <StyledTimelineDot />
                    {eventIndex !== milestone.events.length - 1 && <TimelineConnector sx={{ bgcolor: '#D4AF37' }} />}
                  </TimelineSeparator>
                  <TimelineContent className="text-fade-in-up" style={{ animationDelay: '0.3s' }} sx={{ py: '12px', px: 2 }}>
                    <Paper 
                      elevation={3} 
                      className="glass-effect"
                      sx={{ 
                        p: 3, 
                        backgroundColor: 'rgba(245, 245, 245, 0.7)',
                        borderLeft: '4px solid #D4AF37',
                        backdropFilter: 'blur(10px)',
                        WebkitBackdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.18)',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                        }
                      }}
                    >
                      <Typography variant="h6" component="h4" sx={{ color: '#0D1B2A', fontWeight: 600, mb: 1 }}>
                        {event.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#5D5D5D' }}>
                        {event.description}
                      </Typography>
                    </Paper>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </Box>
        ))}

        {/* Impact Statistics */}
        <Box sx={{ mt: 12, textAlign: 'center' }}>
          <Typography variant="h3" component="h2" className="text-fade-in-up" style={{ animationDelay: '0.1s' }} gutterBottom sx={{ color: '#0D1B2A', fontWeight: 600, mb: 8 }}>
            Our Impact
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
              <Card elevation={3} className="glass-effect" sx={{ borderRadius: 2, py: 4, border: '1px solid rgba(255,255,255,0.2)' }}>
                <CardContent>
                  <Typography variant="h2" component="div" className="text-fade-in-up" style={{ animationDelay: '0.2s' }} sx={{ color: '#D4AF37', fontWeight: 700 }}>
                    500+
                  </Typography>
                  <Typography variant="h6" className="text-fade-in-up" style={{ animationDelay: '0.3s' }} sx={{ color: '#0D1B2A', fontWeight: 600 }}>
                    Artists Empowered
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card elevation={3} className="glass-effect" sx={{ borderRadius: 2, py: 4, border: '1px solid rgba(255,255,255,0.2)' }}>
                <CardContent>
                  <Typography variant="h2" component="div" className="text-fade-in-up" style={{ animationDelay: '0.2s' }} sx={{ color: '#D4AF37', fontWeight: 700 }}>
                    50+
                  </Typography>
                  <Typography variant="h6" className="text-fade-in-up" style={{ animationDelay: '0.3s' }} sx={{ color: '#0D1B2A', fontWeight: 600 }}>
                    Events Organized
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card elevation={3} className="glass-effect" sx={{ borderRadius: 2, py: 4, border: '1px solid rgba(255,255,255,0.2)' }}>
                <CardContent>
                  <Typography variant="h2" component="div" className="text-fade-in-up" style={{ animationDelay: '0.2s' }} sx={{ color: '#D4AF37', fontWeight: 700 }}>
                    12
                  </Typography>
                  <Typography variant="h6" className="text-fade-in-up" style={{ animationDelay: '0.3s' }} sx={{ color: '#0D1B2A', fontWeight: 600 }}>
                    Communities Reached
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card elevation={3} className="glass-effect" sx={{ borderRadius: 2, py: 4, border: '1px solid rgba(255,255,255,0.2)' }}>
                <CardContent>
                  <Typography variant="h2" component="div" className="text-fade-in-up" style={{ animationDelay: '0.2s' }} sx={{ color: '#D4AF37', fontWeight: 700 }}>
                    2500+
                  </Typography>
                  <Typography variant="h6" className="text-fade-in-up" style={{ animationDelay: '0.3s' }} sx={{ color: '#0D1B2A', fontWeight: 600 }}>
                    Lives Impacted
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default MilestonesPage;