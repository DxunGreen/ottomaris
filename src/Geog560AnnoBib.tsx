import { SiteFrame } from "./SiteFrame"

type Entry = {
  citation: string;
  link?: string;
  summary: string;
  reflection: string;
}

const entries: Entry[] = [{
  citation: 'Baker, A., Brenneman, E., Chang, H., McPhillips, L., & Matsler, M. (2019). Spatial analysis of landscape and sociodemographic factors associated with green stormwater infrastructure distribution in Baltimore, Maryland and Portland, Oregon. The Science of the Total Environment, 664, 461–473.',
  link: 'https://doi.org/10.1016/j.scitotenv.2019.01.417',
  summary: 'Analysis of green stormwater infrastructure (GSI) density at both the census block group (CBG) and census tract scales yielded no common landscape or sociodemographic factors between Portland and Baltimore, but analysis did illuminate distinct spatial patterns and correlations for each city. The authors used ArcMap 10.5 to conduct exploratory regression using data from digital elevation models, impervious surface coverages, land uses, sewer systems, buildings, and censuses. Baltimore’s GSI density was essentially random, but was spatially correlated at the CBG level with areas of low population density, high percentages of green space, and high percentages of impervious surfaces. At the census tract level, Baltimore’s GSI was spatially correlated with high elevations, high percentages of poverty, high tax lot values, small building sizes, and low percentages of monolingual English speakers. Unlike Baltimore, Portland’s GSI density was clustered with notable high clustering in outer Southeast Portland. High sewer system pipe density and low incomes were spatially correlated with GSI across both CBG and census tract scales. The CBG scale also saw spatial relations with low percentages in A/B soil and low percentages of White residents while the census tract scale was spatially correlated with newer buildings.',
  reflection: 'This study demonstrates the real world effects of policies on the distribution of green stormwater infrastructure. The authors emphasize that temporal analysis of policy can assist in understanding spatial relationships, which I found quite eye-opening. This study also shows the importance of scale in spatial relationships since correlations did not always stay the same across the CBG and census tract scales.'
}, {
  citation: 'Permatasari, R., Firda, A., Natakusumah, D. K., Yaylacı, M., & Ammarullah, M. I. (2026). Spatial assessment of watershed hydrological characteristics for biosustainable water resource management in Palembang City, Indonesia: a geographic information system (GIS)–analytical hierarchy process (AHP) approach. Geocarto International, 41(1).',
  link: 'https://doi.org/10.1080/10106049.2026.2714596',
  summary: 'The authors assessed the spatial distributions of land use, rainfall, elevation, slope, erosion, and sedimentation within the Palembang City watershed to identify potential areas for biosustainable water resources. Land use data was derived from Landsat 9 Operational Land Imager-2 satellite imagery. Kriging interpolation was applied to rainfall data from the Meteorology, Climatology, and Geophysics Agency of South Sumatra to create a continuous field. Elevation data was obtained from National DEM. Subwatersheds were identified using GIS methods. Soil types and sediment transport were derived from stratified random sampling of soil and sediment in the Palembang City watershed. The results showed the highest potential sites were in the northern and northwestern areas of Palembang and the lowest potential sites were in the northeastern and eastern areas.',
  reflection: 'This study provides expansive detail on the use of a GIS-AHP framework for biosustainable water resource management. The ability of this framework to consider and rank multiple criteria facilitates comprehensive analysis of tropical river basins and could be expanded to other environments. However, since AHP rankings are based on judgements from experts, there remains a degree of subjectivity that can influence results.'
}, {
  citation: 'Talbot, R., Granek, E., Chang, H., Wood, R., & Brander, S. (2022). Spatial and temporal variations of microplastic concentrations in Portland’s freshwater ecosystems. The Science of the Total Environment, 833, Article 155143.',
  link: 'https://doi.org/10.1016/j.scitotenv.2022.155143',
  summary: 'In order to understand spatial and temporal distributions of freshwater microplastics along an urban-rural gradient, the authors sampled river water from ten sites along the Clackamas River and Johnson Creek watersheds. Samples were taken in August and September of 2020 as well as February of 2021. Data from the samples were then compared to streamflow and precipitation data acquired from USGS and the City of Portland HYDRA Rainfall Network. The authors used ArcHydro Tools to create subwatersheds for each site, and used ArcGIS Desktop 10.8.1 to derive land cover percentages within the subwatersheds as well as within a 500 meter nearstream buffer for each site. Analysis suggested that the nearstream areas may contribute more to microplastic concentrations than subwatersheds, which aligns with previous research.',
  reflection: 'This study notes that little research into freshwater microplastics has been done, especially along wide-ranging urban-rural gradients. While this study contributes to knowledge about microplastics in freshwater resources around Portland, it also raises awareness that more studies should be done to identify potential impacts. The influence of nearstream buffers on microplastic concentrations showcases their importance in future studies and policymaking.'
}, {
  citation: 'Wang, X., & Xie, H. (2018). A Review on Applications of Remote Sensing and Geographic Information Systems (GIS) in Water Resources and Flood Risk Management. Water (Basel), 10(5), 608.',
  link: 'https://doi.org/10.3390/w10050608',
  summary: 'This article summarizes twelve papers and highlights the importance of remote sensing and GIS in the published results. The topics of these papers are grouped into the following categories: water resources mapping and management, rainfall measurements and storm hyetography, rainfall runoff prediction and flood forecasting, and water body and flood mapping. For water resources, remote sensing and GIS have enabled comparison between 3D and 2D areas of glaciers, measurement of soil moisture without damage to soil layer structures, measurement of land subsidence and groudwater drawdown, and accurate and fast turfgrass classification from UAV video. For rainfall measurements and storm hyetography, one study compared two remote sensing products, GPM IMERG and TMPA 3B42V7, with IMERG delivering better results, while another study improved on the Huff curve design storm for use in metropolitan Guangzhou, China. In the rainfall runoff prediction and flood forecasting category, each study developed a new model by combining previous models and techniques to increase the scope and accuracy of modeled events and areas. Finally, studies in water body and flood mapping used remote sensing and GIS to detect flash floods in Jeddah, Saudi Arabia, detect and extract water bodies from various urban areas in China, and map flood inundation in the Guayas watershed in Ecuador.',
  reflection: 'The very high accuracy of UAV video classification seems promising, especially given recent advances in content classification. The ability of remote sensing techniques to acquire data without damage to the landscape is also significant. Lastly, using GIS processing to modeling rainfall with design storms and hyetographs stood out as extremely important in water resource management.'
},];

// TODO: remove 
while (entries.length < 15) entries.push({
  citation: 'Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi pretium tellus duis convallis tempus leo eu aenean sed diam.',
  link: 'https://ottomaris.com',
  summary: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Ex sapien vitae pellentesque sem placerat in id. Pretium tellus duis convallis tempus leo eu aenean. Urna tempor pulvinar vivamus fringilla lacus nec metus. Iaculis massa nisl malesuada lacinia integer nunc posuere. Semper vel class aptent taciti sociosqu ad litora. Conubia nostra inceptos himenaeos orci varius natoque penatibus. Dis parturient montes nascetur ridiculus mus donec rhoncus. Nulla molestie mattis scelerisque maximus eget fermentum odio. Purus est efficitur laoreet mauris pharetra vestibulum fusce.',
  reflection: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.'
});

export function Geog560AnnoBib() {
  return (
    <SiteFrame>
      <div className="flex flex-col gap-5 self-center bg-black px-10 md:px-20 py-10 max-w-300 rounded-sm">
        <h1 className="text-lg text-center">Annotated Bibliography</h1>
        <div className="text-center">
          <h2 className="text-lg">Uses of GIS in Water Resource Management</h2>
          <h3 className="text-sm">Compiled by Jane Ottomaris Hedge</h3>
          <h3 className="text-sm">GEOG 560 GIScience I: Introduction to Geographic Information Science, Fall 2026, Oregon State University</h3>
        </div>
        <ul className="flex flex-col gap-5">
        {entries.map((entry) => (
          <li className="text-base">
            <p className="ps-5 md:ps-10 -indent-5 md:-indent-10">{entry.citation}<a className="hover:bg-muted hover:text-blue-400 focus:bg-muted focus:text-blue-400 rounded-sm px-1" href={entry.link}>{entry.link}</a></p>
            <div className="ms-5 md:ms-10 mbs-2">
              <p>Summary: <span className="text-muted-foreground">{entry.summary}</span></p>
              <p className="mbs-2">Reflection: <span className="text-muted-foreground">{entry.reflection}</span></p>
            </div>
          </li>
        ))}
        </ul>
      </div>
    </SiteFrame>
  )
}

export default Geog560AnnoBib
