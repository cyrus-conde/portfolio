import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import comingsoon from '../assets/comingsoon.png';
import digitalFeedbackForm from '../assets/projects/digitalfeedbackform.png';
import lguNab from '../assets/lgu-nabu.png';
import itd112 from '../assets/itd112.png';
import msuiitcis from '../assets/msuiit-cis.jpg';
import queueing from '../assets/queueing.png';
import nnchspta from '../assets/nnchs-pta.png';
import gg from '../assets/gg-electoral-system.png';
import bon from '../assets/bon.png';
import paludo from '../assets/paludo.png';
import outsourcify from '../assets/outsourcify.png';
export default function Projects() {
  return (
    <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col w-full mb-12">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white-900 text-center">
                PROJECTS
                </h1>
                <div className='flex flex-wrap'>
                <Card sx={{ width: 350, marginRight: 2, marginBottom: 2 }}>
                    <CardMedia
                        sx={{ height: 250 }}
                        image={digitalFeedbackForm}
                        title="Digital Feedback Form"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Digital Feedback Form
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        It is a mobile application developed with ionic framework. It holds and accepts feedback from clients.
                        </Typography>
                    </CardContent>
                    <CardActions>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Ionic</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#SQLite</span>
                    </CardActions>
                </Card>
                <Card sx={{ width: 350, marginRight: 2, marginBottom: 2 }}>
                    <CardMedia
                        sx={{ height: 250 }}
                        image={lguNab}
                        title="LGU Nabunturan"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        LGU Nabunturan
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        The official website of the Municipality of Nabunturan. 
                        </Typography>
                    </CardContent>
                    <CardActions>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#wordpress</span>
                    </CardActions>
                </Card>
                <Card sx={{ width: 350, marginRight: 2, marginBottom: 2 }}>
                    <CardMedia
                        sx={{ height: 250 }}
                        image={itd112}
                        title="Data Visualization"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Data Visualization
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        A data visualization final project in our ITD112 subject.
                        </Typography>
                    </CardContent>
                    <CardActions>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#django</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#bootstrap</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#jquery</span>
                    </CardActions>
                </Card>
                <Card sx={{ width: 350, marginRight: 2, marginBottom: 2 }}>
                    <CardMedia
                        sx={{ height: 250 }}
                        image={msuiitcis}
                        title="MSU-IIT CIS"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        MSU-IIT Clinic Information System
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Web-based School Clinic Information System using Laravel and ReactJS.
                        </Typography>
                    </CardContent>
                    <CardActions>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Laravel</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#ReactJS</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Postgres</span>
                    </CardActions>
                </Card>
                <Card sx={{ width: 350, marginRight: 2, marginBottom: 2 }}>
                    <CardMedia
                        sx={{ height: 250 }}
                        image={queueing}
                        title="Queueing System"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Queueing System
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Web-based Queueing System designed specifically for Andres Bonifacio College Inc.
                        </Typography>
                    </CardContent>
                    <CardActions>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Laravel</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#ReactJS</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Postgres</span>
                    </CardActions>
                </Card>
                <Card sx={{ width: 350, marginRight: 2, marginBottom: 2 }}>
                    <CardMedia
                        sx={{ height: 250 }}
                        image={nnchspta}
                        title="NNCHS PTA"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        NNCHS PTA Collection System
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Web-based PTA Collection System designed specifically for Nabunturan National Comprehensive High School.
                        </Typography>
                    </CardContent>
                    <CardActions>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Laravel</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#ReactJS</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Postgres</span>
                    </CardActions>
                </Card>
                <Card sx={{ width: 350, marginRight: 2, marginBottom: 2 }}>
                    <CardMedia
                        sx={{ height: 250 }}
                        image={gg}
                        title="GG Electoral System"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        GG Electoral System
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Web-based Electoral System designed specifically for Andres Bonifacio College Inc.
                        </Typography>
                    </CardContent>
                    <CardActions>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Laravel</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#ReactJS</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Postgres</span>
                    </CardActions>
                </Card>
                <Card sx={{ width: 350, marginRight: 2, marginBottom: 2 }}>
                    <CardMedia
                        sx={{ height: 250 }}
                        image={bon}
                        title="Bon Appetite"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Bon Appetite
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        A freelance project
                        </Typography>
                    </CardContent>
                    <CardActions>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Wordpress</span>
                    </CardActions>
                </Card>
                <Card sx={{ width: 350, marginRight: 2, marginBottom: 2 }}>
                    <CardMedia
                        sx={{ height: 250 }}
                        image={paludo}
                        title="Paludo Contracting"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Paludo Contracting
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        A freelance project
                        </Typography>
                    </CardContent>
                    <CardActions>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Wordpress  </span>
                    </CardActions>
                </Card>
                <Card sx={{ width: 350, marginRight: 2, marginBottom: 2 }}>
                    <CardMedia
                        sx={{ height: 250 }}
                        image={outsourcify}
                        title="Outsourcify Solutions"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Outsourcify Solutions
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        A freelance project
                        </Typography>
                    </CardContent>
                    <CardActions>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Wordpress  </span>
                    </CardActions>
                </Card>
                </div>
                
                
            </div>
    </div>
    
  );
}
