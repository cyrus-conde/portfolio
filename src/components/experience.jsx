import React, {Fragment} from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import Typography from '@mui/material/Typography';

export default function Experience() {
  return (
    <Fragment>
      <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white-900">
                Education and Work Experience
                </h1>
                <Timeline position="alternate">
                  {/*work*/}
                  <TimelineItem>
                    <TimelineOppositeContent
                      sx={{ m: 'auto 0' }}
                      align="right"
                      variant="h6"
                    >
                      September 2023 - Present
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineConnector sx={{ bgcolor: 'primary.main' }}/>
                      <TimelineDot color="primary" sx={{margin: '10px'}}>
                        <WorkIcon/>
                      </TimelineDot>
                      <TimelineConnector sx={{ bgcolor: 'primary.main' }}/>
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2, bgcolor: 'primary.main', borderRadius: '8px' }}>
                      <Typography variant="h6" component="span">
                      Andres Bonifacio College Inc.
                      </Typography>
                      <Typography variant='body2'>Dipolog City, Zamboanga del Norte</Typography>
                      <Typography variant='body2' className='italic'>Website and Database Analyst</Typography>
                    </TimelineContent>
                  </TimelineItem>
                  {/*work*/}
                  <TimelineItem>
                    <TimelineOppositeContent
                      sx={{ m: 'auto 0' }}
                      align="right"
                      variant="h6"
                    >
                      Jan. 2022 - July 2022
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineConnector sx={{ bgcolor: 'primary.main' }}/>
                      <TimelineDot color="primary" sx={{margin: '10px'}}>
                        <WorkIcon />
                      </TimelineDot>
                      <TimelineConnector sx={{ bgcolor: 'primary.main' }}/>
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2, bgcolor: 'primary.main', borderRadius: '8px' }}>
                      <Typography variant="h6" component="span">
                      Local Government Unit of Nabunturan
                      </Typography>
                      <Typography variant='body2'>Nabunturan, Davao de Oro</Typography>
                      <Typography variant='body2' className='italic'>Website Manager</Typography>
                    </TimelineContent>
                  </TimelineItem>
                  {/*college*/}
                  <TimelineItem>
                    <TimelineOppositeContent
                      sx={{ m: 'auto 0' }}
                      variant="h6"
                    >
                      2019 - 2023
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineConnector sx={{ bgcolor: 'primary.main' }}/>
                      <TimelineDot color="primary" sx={{margin: '10px'}}>
                        <SchoolIcon />
                      </TimelineDot>
                      <TimelineConnector sx={{ bgcolor: 'primary.main' }}/>
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2, bgcolor: 'primary.main', borderRadius: '8px'   }}>
                      <Typography variant="h6" component="span">
                      Mindanao State University - Iligan Institute Technology
                      </Typography>
                      <Typography variant="body2">Iligan City, Lanao del Norte</Typography>
                      <Typography variant="body2" className='italic'>Bachelor of Science in Information Technology</Typography>
                    </TimelineContent>
                  </TimelineItem>
                  {/*shs*/}
                  <TimelineItem>
                  <TimelineOppositeContent
                      sx={{ m: 'auto 0' }}
                      align="right"
                      variant="h6"
                    >
                      2017 - 2019
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
                      <TimelineDot color="primary" sx={{margin: '10px'}}>
                        <SchoolIcon />
                      </TimelineDot>
                      <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2, bgcolor: 'primary.main', borderRadius: '8px' }}>
                      <Typography variant="h6" component="span">
                      Nabunturan National Comprehensive High School - Senior High School
                      </Typography>
                      <Typography variant="body2">Nabunturan, Davao de Oro</Typography>
                      <Typography variant="body2" className='italic'>TVL - ICT - Computer Programming</Typography>
                    </TimelineContent>
                  </TimelineItem>
                  {/*jhs*/}
                  <TimelineItem>
                  <TimelineOppositeContent
                      sx={{ m: 'auto 0' }}
                      align="right"
                      variant="h6"
                    >
                      2013 - 2017
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
                      <TimelineDot color="primary" sx={{margin: '10px'}}>
                        <SchoolIcon />
                      </TimelineDot>
                      <TimelineConnector sx={{ bgcolor: 'primary.main' }}/>
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2, bgcolor: 'primary.main', borderRadius: '8px' }}>
                      <Typography variant="h6" component="span">
                        Nabunturan National Comprehensive High School
                      </Typography>
                      <Typography variant="body2">Nabunturan, Davao de Oro</Typography>
                      <Typography variant="body2" className='italic'>Special Program in the Arts - Multimedia Arts</Typography>
                    </TimelineContent>
                  </TimelineItem>
                </Timeline>
            </div>
      </div>

    </Fragment>
    
  );
}
