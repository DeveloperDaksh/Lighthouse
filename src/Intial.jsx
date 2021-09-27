// import { response } from "express";

import React, { useState } from "react";
// import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { color } from "@mui/system";
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
function createData2(value) {
  return { value };
}
function cgs(value) {
  return { value };
}
var count = 0;
var count2 = 0;
const rows = [
  createData('CUMULATIVE_LAYOUT_SHIFT_SCORE', 159, 6.0, 24, 4.0),
  createData('FIRST_CONTENTFUL_PAINT_MS', 237, 9.0, 37, 4.3),
  createData('FIRST_INPUT_DELAY_MS', 262, 16.0, 24, 6.0),
  createData('LARGEST_CONTENTFUL_PAINT_MS', 305, 3.7, 67, 4.3),
];
const content = [
  createData2("mainthread-work-breakdown"), createData2("performance-budget"), createData2("uses-responsive-images"), createData2("offscreen-images"), createData2("screenshot-thumbnails"), createData2("total-blocking-time"), createData2("font-display"), createData2("diagnostics"), createData2("interactive"), createData2("uses-rel-preload"), createData2("resource-summary"), createData2("critical-request-chains"), createData2("timing-budget"), createData2("uses-passive-event-listeners"), createData2("third-party-facades"),
  createData2("long-tasks"), createData2("total-byte-weight"), createData2("unused-css-rules"), createData2("lcp-lazy-loaded"), createData2("redirects"), createData2("third-party-summary"), createData2("speed-index"), createData2("unminified-javascript"), createData2("user-timings"), createData2("unsized-images"), createData2("modern-image-formats"), createData2("main-thread-tasks"), createData2("uses-long-cache-ttl"), createData2("network-rtt"), createData2("full-page-screenshot"), createData2("efficient-animated-content"), createData2("uses-optimized-images"),
  createData2("bootup-time"), createData2("viewport"), createData2("duplicated-javascript"), createData2("uses-text-compression"), createData2("server-response-time"), createData2("final-screenshot"), createData2("largest-contentful-paint-element"), createData2("network-requests"), createData2("network-server-latency"), createData2("uses-rel-preconnect"), createData2("render-blocking-resources"), createData2("layout-shift-elements"), createData2("preload-lcp-image"), createData2("first-contentful-paint"), createData2("unminified-css"), createData2("largest-contentful-paint"),
  createData2("dom-size"), createData2("first-meaningful-paint"), createData2("legacy-javascript"), createData2("metrics"), createData2("max-potential-fid"), createData2("script-treemap-data"), createData2("cumulative-layout-shift"), createData2("unused-javascript"), createData2("non-composited-animations"), createData2("no-document-write")
];
const cg = [
  cgs("a11y-best-practices"), cgs("a11y-language"), cgs("best-practices-browser-compat"), cgs("metrics"), cgs("pwa-optimized"), cgs("seo-crawl"), cgs("a11y-tables-lists"), cgs("seo-content"), cgs("a11y-navigation"), cgs("best-practices-trust-safety"), cgs("a11y-names-labels"), cgs("a11y-aria"), cgs("pwa-installable"), cgs("load-opportunities"), cgs("budgets"), cgs("best-practices-general"), cgs("seo-mobile"), cgs("a11y-audio-video"), cgs("a11y-color-contrast"), cgs("diagnostics"), cgs("best-practices-ux")
];
<Box
  component="span"
  sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
>
  •
</Box>



const Intial = () => {
  const [url, setUrl] = useState(null) // for url
  function setUpQuery(val) { //function creates the full url for api call
    const api = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';//First part of the url
    const parameters = {
      url: encodeURIComponent(val.target.value)
    };
    let query = `${api}?`;
    for (let key in parameters) {
      query += `${key}=${parameters[key]}`;
    }
    setUrl(query);
  }
  var datam = [];
  const [data, setdata] = useState([]);//set data from api
  const apiGet = () => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setdata(json)

        console.log("data", data, "json", json);

      })
    console.log("data", data);
    // .then(() => {
    //   console.log(JSON.stringify(data))
    // setTimeout(function () {
    // callit()
    // }, 12000)
    // })
    console.log(data);
    // await callit();

  }
  const callit = () => {
    return (
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead> Loading Experience
              <TableRow>
                <TableCell>Metrics</TableCell>
                <TableCell align="right">percentile</TableCell>
                <TableCell align="right">min</TableCell>
                <TableCell align="right">max</TableCell>
                <TableCell align="right">proportion</TableCell>

                {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {/* {console.log("cnbn", JSON.stringify(data.loadingExperience), "gyu", data.loadingExperience.metrics["CUMULATIVE_LAYOUT_SHIFT_SCORE"].percentile)} */}
              {rows.map((d) => (
                <TableRow
                  key={d.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">

                    {d.name}
                  </TableCell>
                  <TableCell align="right">{datam.loadingExperience.metrics["CUMULATIVE_LAYOUT_SHIFT_SCORE"].percentile}</TableCell>
                  <TableCell align="right">{datam.loadingExperience.metrics["CUMULATIVE_LAYOUT_SHIFT_SCORE"].distributions[0].min}, {data.loadingExperience.metrics[d.name].distributions[1].min},{data.loadingExperience.metrics[d.name].distributions[2].min}</TableCell>
                  <TableCell align="right">{datam.loadingExperience.metrics["CUMULATIVE_LAYOUT_SHIFT_SCORE"].distributions[0].max}, {data.loadingExperience.metrics[d.name].distributions[1].max}</TableCell>
                  <TableCell align="right">{datam.loadingExperience.metrics["CUMULATIVE_LAYOUT_SHIFT_SCORE"].distributions[0].proportion}, {data.loadingExperience.metrics[d.name].distributions[1].proportion} , {data.loadingExperience.metrics[d.name].distributions[2].proportion}</TableCell>
                  {/* <TableCell align="right">{row.fat}</TableCell>
            <TableCell align="right">{row.carbs}</TableCell>
            <TableCell align="right">{row.protein}</TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>)
  }


  return (
    <>

      <Box sx={{ minWidth: 275 }}>
        <React.Fragment>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Link of the Website
            </Typography>
            {/* <input type="url" onChange={setUpQuery}/>  */}
            <TextField id="outlined-basic" type="url" onChange={setUpQuery} label="Link" variant="outlined" />
            <Stack spacing={2} direction="row">
              <Button variant="contained" onClick={apiGet} sx={{ my: '10px' }} >Submit</Button>
            </Stack ></CardContent>
        </React.Fragment>
      </Box>


      <React.Fragment>
        <CardContent>
          <Typography variant="h5" component="div" justifyContent="center">
            Highlights
          </Typography>

          <Typography variant="body2">
            Search Result For: {data.id}
            <br />
            {/* Category:{data.loadingExperience.category} */}
          </Typography>


        </CardContent>
      </React.Fragment>
      <Typography variant="h5" component="div" justifyContent="center">
        Complete Info about the website is as follow:
      </Typography>
      {/* <p>{data.id}</p> */}

      <div >
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead> <h2>Loading Experience</h2>
              <TableRow>
                <TableCell style={{ textAlign: "center" }}>Metrics</TableCell>
                <TableCell style={{ textAlign: "center" }} align="right">percentile</TableCell>
                <TableCell style={{ textAlign: "center" }} align="right">min</TableCell>
                <TableCell style={{ textAlign: "center" }} align="right">max</TableCell>
                <TableCell style={{ textAlign: "center" }} align="right">proportion</TableCell>

                {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {console.log("cnbn", JSON.stringify(data.loadingExperience))}
              {rows.map((d) => (
                <TableRow
                  key={d.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">

                    {d.name}
                  </TableCell>
                  <TableCell style={{ textAlign: "center" }} align="right">{JSON.stringify(data.loadingExperience) == undefined ? "loading" : JSON.stringify(data.loadingExperience.metrics[d.name].percentile)}</TableCell>
                  <TableCell style={{ textAlign: "center" }} align="right">{JSON.stringify(data.loadingExperience) == undefined ? "loading" : JSON.stringify(data.loadingExperience.metrics[d.name].distributions[0].min)}, {JSON.stringify(data.loadingExperience) == undefined ? "" : JSON.stringify(data.loadingExperience.metrics[d.name].distributions[1].min)},{JSON.stringify(data.loadingExperience) == undefined ? "" : JSON.stringify(data.loadingExperience.metrics[d.name].distributions[2].min)}</TableCell>
                  <TableCell style={{ textAlign: "center" }} align="right">{JSON.stringify(data.loadingExperience) == undefined ? "loading" : JSON.stringify(data.loadingExperience.metrics[d.name].distributions[0].max)}, {JSON.stringify(data.loadingExperience) == undefined ? "" : JSON.stringify(data.loadingExperience.metrics[d.name].distributions[1].max)}</TableCell>
                  <TableCell style={{ textAlign: "center" }} align="right">{JSON.stringify(data.loadingExperience) == undefined ? "loading" : JSON.stringify(data.loadingExperience.metrics[d.name].distributions[0].proportion)},<br />{JSON.stringify(data.loadingExperience) == undefined ? "" : JSON.stringify(data.loadingExperience.metrics[d.name].distributions[1].proportion)} ,<br />{JSON.stringify(data.loadingExperience) == undefined ? "" : JSON.stringify(data.loadingExperience.metrics[d.name].distributions[2].proportion)}</TableCell>
                  {/* <TableCell align="right">{datam.loadingExperience.metrics["CUMULATIVE_LAYOUT_SHIFT_SCORE"].distributions[0].max}, {data.loadingExperience.metrics[d.name].distributions[1].max}</TableCell> */}
                  {/* <TableCell align="right">{datam.loadingExperience.metrics["CUMULATIVE_LAYOUT_SHIFT_SCORE"].distributions[0].proportion}, {data.loadingExperience.metrics[d.name].distributions[1].proportion} , {data.loadingExperience.metrics[d.name].distributions[2].proportion}</TableCell> */}
                  {/* <TableCell align="right">{row.fat}</TableCell>
        <TableCell align="right">{row.carbs}</TableCell>
        <TableCell align="right">{row.protein}</TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>




      <div>
        <Card style={{ marginLeft: "80px", marginTop: "22px" }} sx={{ maxWidth: 822 }}>
          {data.lighthouseResult == undefined ? "loading.." : console.log("audits", data.lighthouseResult.audits)}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Light House Result
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <b>UserAgent: </b> {data.loadingExperience == undefined ? "loading..." : data.lighthouseResult.userAgent} <br />
              <b>fetch time: </b>{data.loadingExperience == undefined ? "loading..." : data.lighthouseResult.fetchTime} <br />
              <b>Warnings: </b>{data.loadingExperience == undefined ? "loading..." : data.lighthouseResult.runWarnings} <br />

              <h2>{data.loadingExperience == undefined ? "Loading..." : "Audits"}</h2>

              {content.map((val) => (
                <div>
                  <b style={{ textTransform: "uppercase" }}><h4>{data.loadingExperience == undefined ? "" : val.value}</h4></b>
                  <b>{data.loadingExperience == undefined ? "" : "Title :"} </b>{data.loadingExperience == undefined ? "" : data.lighthouseResult.audits[val.value].title} <br />
                  <b>{data.loadingExperience == undefined ? "" : "Description :"} </b>{data.loadingExperience == undefined ? "" : data.lighthouseResult.audits[val.value].description} <br />
                  <b>{data.loadingExperience == undefined ? "" : "Score :"} </b>{data.loadingExperience == undefined ? "" : (data.lighthouseResult.audits[val.value].score == null ? "null" : data.lighthouseResult.audits[val.value].score)} <br />
                  <b>{data.loadingExperience == undefined ? "" : "Score Display Mode :"} </b>{data.loadingExperience == undefined ? "" : data.lighthouseResult.audits[val.value].scoreDisplayMode} <br />
                  <b>{data.loadingExperience == undefined ? "" : "Display Value :"} </b>{data.loadingExperience == undefined ? "" : data.lighthouseResult.audits[val.value].displayValue == null ? "null" : data.lighthouseResult.audits[val.value].displayValue} <br />
                </div>
              ))}

            </Typography>
          </CardContent>

        </Card>
      </div>

      <div>
        <Card style={{ marginLeft: "80px", marginTop: "22px" }} sx={{ maxWidth: 822 }}>
          {data.lighthouseResult == undefined ? "loading.." : console.log("audits", data.lighthouseResult.audits)}
          <CardContent>
            <Typography style={{ textAlign: "center" }} gutterBottom variant="h5" component="div">
              Categories
            </Typography>
            <h2 style={{ marginLeft: "30px" }}>{data.loadingExperience == undefined ? "Loading..." : "Performance"}</h2>
            <Typography variant="body2" color="text.secondary">
              <b>Id: </b> {data.loadingExperience == undefined ? "loading..." : data.lighthouseResult.categories.performance.id} <br />
              <b>Title: </b>{data.loadingExperience == undefined ? "loading..." : data.lighthouseResult.categories.performance.title} <br />
              <b>Score: </b>{data.loadingExperience == undefined ? "loading..." : data.lighthouseResult.categories.performance.score} <br /> <br />

              <h3>{data.loadingExperience == undefined ? "Loading..." : "Audit"}</h3>

              {data.lighthouseResult == undefined ? "loading..." : data.lighthouseResult.categories.performance.auditRefs.map((val) => (
                <div>
                  <b>{++count}</b>
                  <div style={{ marginLeft: "12px" }}>
                    {/* <b style={{ textTransform: "uppercase" }}><h4>{data.loadingExperience == undefined ? "" : val.value}</h4></b> */}
                    <b>{data.loadingExperience == undefined ? "" : "Id :"} </b>{data.loadingExperience == undefined ? "" : val.id} <br />
                    <b>{data.loadingExperience == undefined ? "" : "Title :"} </b>{data.loadingExperience == undefined ? "" : val.weight} <br />
                    <b>{data.loadingExperience == undefined ? "" : "Score :"} </b>{data.loadingExperience == undefined ? "" : (val.group == null ? "null" : val.group)} <br /><br />
                    {/* <b>{data.loadingExperience == undefined ? "" : "Score Display Mode :"} </b>{data.loadingExperience == undefined ? "" : data.lighthouseResult.audits[val.value].scoreDisplayMode} <br /> */}
                    {/* <b>{data.loadingExperience == undefined ? "" : "Display Value :"} </b>{data.loadingExperience == undefined ? "" : data.lighthouseResult.audits[val.value].displayValue == null ? "null" : data.lighthouseResult.audits[val.value].displayValue} <br /> */}
                  </div>
                </div>
              ))}

            </Typography>
          </CardContent>

        </Card>
      </div>

      <div>
        <Card style={{ marginLeft: "80px", marginTop: "22px" }} sx={{ maxWidth: 822 }}>
          {data.lighthouseResult == undefined ? "loading.." : console.log("audits", data.lighthouseResult.audits)}
          <CardContent>
            <Typography style={{ textAlign: "center", marginBottom: "18px" }} gutterBottom variant="h5" component="div">
              Category Groups
            </Typography>
            {/* <h2 style={{ marginLeft: "30px" }}>{data.loadingExperience == undefined ? "Loading..." : "Performance"}</h2> */}
            <Typography variant="body2" color="text.secondary">
              {/* <b>Id: </b> {data.loadingExperience == undefined ? "loading..." : data.lighthouseResult.categories.performance.id} <br /> */}
              {/* <b>Title: </b>{data.loadingExperience == undefined ? "loading..." : data.lighthouseResult.categories.performance.title} <br /> */}
              {/* <b>Score: </b>{data.loadingExperience == undefined ? "loading..." : data.lighthouseResult.categories.performance.score} <br /> <br /> */}

              {/* <h3>{data.loadingExperience == undefined ? "Loading..." : "Audit Refs:..."}</h3> */}

              {data.lighthouseResult == undefined ? "loading..." : cg.map((val) => (
                <div>
                  {/* {console.log(val.value)} */}
                  <b style={{ marginRight: "8px" }}>  {++count2}.</b>              <h3 style={{ textTransform: "uppercase", marginTop: "-21px", marginLeft: "24px" }}>{data.loadingExperience == undefined ? "Loading..." : val.value}</h3>
                  <div style={{ marginLeft: "12px" }}>
                    {/* <b style={{ textTransform: "uppercase" }}><h4>{data.loadingExperience == undefined ? "" : val.value}</h4></b> */}
                    <b>{data.loadingExperience == undefined ? "" : "Title :"} </b>{data.loadingExperience == undefined ? "" : data.lighthouseResult.categoryGroups[val.value].title} <br />
                    {/* <b>{data.loadingExperience == undefined ? "" : "Description :"} </b>{data.loadingExperience == undefined ? "" : val.description} <br /> */}
                    <b>{data.loadingExperience == undefined ? "" : "Description :"} </b>{data.loadingExperience == undefined ? "" : (data.lighthouseResult.categoryGroups[val.value].description == null ? "null" : data.lighthouseResult.categoryGroups[val.value].description)} <br /><br />
                    {/* <b>{data.loadingExperience == undefined ? "" : "Score Display Mode :"} </b>{data.loadingExperience == undefined ? "" : data.lighthouseResult.audits[val.value].scoreDisplayMode} <br /> */}
                    {/* <b>{data.loadingExperience == undefined ? "" : "Display Value :"} </b>{data.loadingExperience == undefined ? "" : data.lighthouseResult.audits[val.value].displayValue == null ? "null" : data.lighthouseResult.audits[val.value].displayValue} <br /> */}
                  </div>
                </div>
              ))}

            </Typography>
          </CardContent>

        </Card>
      </div>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}
export default Intial;
