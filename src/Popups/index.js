const planningappsPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-building" aria-hidden="true"></i><p class="title">Q1.1 - Planning Applications</p>
  <p></p>
  <p class="info">Planning Application No.: ${feature.properties.refval}</p>
  <p class="info">Address: ${feature.properties.address}</p>
  <p class="info">App Type: ${feature.properties.application_type}</p>
  <p class="info">Proposal: ${feature.properties.proposal}</p>
  <p class="info">Decision: ${feature.properties.decision}</p>
  <p class="info">Decision Date: ${feature.properties.decision_date}</p>
  
  </div>`
 
  layer.bindPopup(content)
 }

 const buildingregsapprovalPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-list" aria-hidden="true"></i><p class="title">Q1.1 - Building Regulations Approval</p>
  <p></p>
  <p class="info">Application No.: ${feature.properties.refval}</p>
  <p class="info">Address: ${feature.properties.address}</p>
  <p class="info">App Type: ${feature.properties.apptyp}</p>
  <p class="info">Description: ${feature.properties.dscrpn}</p>
  <p class="info">Decision: ${feature.properties.bcstat}</p>
  <p class="info">Decision Date: ${feature.properties.date_modified}</p>
  
  </div>`
 
  layer.bindPopup(content)
 }

 const buildingcertPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-certificate" aria-hidden="true"></i><p class="title">Q1.1 - Building Certificates</p>
  <p></p>
  <p class="info">Application No.: ${feature.properties.refval}</p>
  <p class="info">Address: ${feature.properties.address}</p>
  <p class="info">Completion Date: ${feature.properties.date_modified}</p>
  <p class="info">Description: ${feature.properties.dscrpn}</p>
  <p class="info">Application Type: ${feature.properties.apptyp}</p>
  
  </div>`
 
  layer.bindPopup(content)
 }

const airport_public_safety_zonePopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-plane" aria-hidden="true"></i><p class="title">Q1.2 - Airport Public Safety Zone</p>
  <p></p>
  <p class="info">Policy: ${feature.properties.policy}</p>
  
  </div>`
 
  layer.bindPopup(content)
 }

 const ancientmonumentPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-flag" aria-hidden="true"></i><p class="title">Q1.2 - Ancient Monuments</p>
  <p></p>
  <p class="info">Name: ${feature.properties.name}</p>
  <p class="info">National Monument No: ${feature.properties.national_monument_no}</p>
  
  </div>`
 
  layer.bindPopup(content)
 } 

 const conservationareaPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-certificate" aria-hidden="true"></i><p class="title">Q1.2 - Conservation Areas</p>
  <p></p>
  <p class="info">${feature.properties.cons_area}</p>
  
  </div>`
 
  layer.bindPopup(content)
 }

 const employmentareasPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-briefcase" aria-hidden="true"></i><p class="title">Q1.2 - Employment Areas</p>
  <p></p>
  <p class="info">ID: ${feature.properties.id}</p>
  <p class="info">Name: ${feature.properties.name}</p>
  <p class="info">Name: ${feature.properties.policy}</p>
  
  </div>`
 
  layer.bindPopup(content)
 }

 const employmentproposedPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-briefcase" aria-hidden="true"></i><p class="title">Q1.2 - Employment Proposed</p>
  <p></p>
  <p class="info">ID: ${feature.properties.id}</p>
  <p class="info">Name: ${feature.properties.policy}</p>
  
  </div>`
 
  layer.bindPopup(content)
 } 

 const prowPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-map-signs" aria-hidden="true"></i><p class="title">Q2.2 - Definitive Rights of Way</p>
  <p></p>
  <p class="info">PROW Number: ${feature.properties.row}</p>
  <p class="info">Type: ${feature.properties.type}</p>
  
  </div>`
 
  layer.bindPopup(content)
 }

 const floodzonesPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-tint" aria-hidden="true"></i><p class="title">Q1.2 - Flood Zones</p>
  <p></p>
  <p class="info">Risk Level: ${feature.properties.risk_level}</p>
  <p class="info">Type: ${feature.properties.type}</p>
  <p class="info">Source: ${feature.properties.source}</p>
  
  </div>`
 
  layer.bindPopup(content)
 }

 const greenbeltPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-pagelines" aria-hidden="true"></i><p class="title">Q1.2 - Green Belt</p>

  </div>`
 
  layer.bindPopup(content)
 }

 const greenbeltmedsPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-building-o" aria-hidden="true"></i><p class="title">Q1.2 - Green Belt MEDS</p>
  <p></p>
  <p class="info">Name: ${feature.properties.name}</p>
  <p class="info">Policy: ${feature.properties.policy}</p>
  
  </div>`
 
  layer.bindPopup(content)
 }

 const generalPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-list" aria-hidden="true"></i><p class="title">Q1.2 - General</p>
  <p></p>
  <p class="info">Name: ${feature.properties.tquniqueid}</p>
  <p class="info">Policy: ${feature.properties.policy_1}</p>
  
  </div>`
 
  layer.bindPopup(content)
 }

 const greenchainPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-leaf" aria-hidden="true"></i><p class="title">Q1.2 - Green Chain</p>
  <p></p>
  <p class="info">ID: ${feature.properties.id}</p>
  <p class="info">Policy: ${feature.properties.policy}</p>
  
  </div>`
 
  layer.bindPopup(content)
 }

 const gravel_aosPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-search" aria-hidden="true"></i><p class="title">Q1.2 - Gravel</p>
  <p></p>
  <p class="info">ID: ${feature.properties.id}</p>
  <p class="info">Name: ${feature.properties.name}</p>
  <p class="info">Policy: ${feature.properties.policy}</p>
  
  </div>`
 
  layer.bindPopup(content)
 }

 const housingsitesPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-home" aria-hidden="true"></i><p class="title">Q1.2 - Housing Sites</p>
  <p></p>
  <p class="info">ID: ${feature.properties.id}</p>
  <p class="info">Name: ${feature.properties.name}</p>
  <p class="info">Policy: ${feature.properties.policy}</p>
  
  </div>`
 
  layer.bindPopup(content)
 }

 const landscapecharacterareaPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-list" aria-hidden="true"></i><p class="title">Q1.2 - Landscape Character Area</p>
  <p></p>
  <p class="info">Name: ${feature.properties.name}</p>
  <p class="info">Policy: ${feature.properties.policy}</p>
  
  </div>`
 
  layer.bindPopup(content)
 }

 const localnaturereservePopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-tree" aria-hidden="true"></i><p class="title">Q1.2 - Local Nature Reserve</p>
  <p></p>
  <p class="info">Name: ${feature.properties.reserve_na}</p>
  
  </div>`
 
  layer.bindPopup(content)
 }

const localopenspacePopup = (feature, layer) => {
  
const content = `<div class="item"><i class="fa fa-leaf" aria-hidden="true"></i><p class="title">Q1.2 - Local Open Space</p>
<p></p>
<p class="info">ID: ${feature.properties.id}</p>
<p class="info">Name: ${feature.properties.name}</p>
<p class="info">Policy: ${feature.properties.policy}</p>
  
</div>`
 
layer.bindPopup(content)
}

const localwildlifesitesPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-pagelines" aria-hidden="true"></i><p class="title">Q1.2 - Local Wildlife Sites</p>
  <p></p>
  <p class="info">ID: ${feature.properties.id}</p>
  <p class="info">Policy: ${feature.properties.policy}</p>
    
  </div>`
   
  layer.bindPopup(content)
  }

const metrolinkcorridorPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-subway" aria-hidden="true"></i><p class="title">Q1.2 - Metrolink Corridor</p>
  <p></p>
  <p class="info">Chapter: ${feature.properties.chapter}</p>
  <p class="info">Policy: ${feature.properties.policy}</p>
      
  </div>`
     
  layer.bindPopup(content)
  }

const m60gatewaysitesPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-road" aria-hidden="true"></i><p class="title">Q1.2 - M60 Gateway Sites</p>
  <p></p>
  <p class="info">Chapter: ${feature.properties.chapter}</p>
  <p class="info">Name: ${feature.properties.name}</p>
  <p class="info">Policy: ${feature.properties.policy}</p>
     
  </div>`
     
  layer.bindPopup(content)
  }

const parkgardenofhistoricinterestPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-tree" aria-hidden="true"></i><p class="title">Q1.2 - Park or Garden of Historic Interest</p>
  <p></p>
  <p class="info">Site: ${feature.properties.site}</p>
     
  </div>`
       
  layer.bindPopup(content)
  }

const pgasPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-file-text" aria-hidden="true"></i><p class="title">Q1.2 - Policy Guidance Areas</p>
  <p></p>
  <p class="info">ID: ${feature.properties.id}</p>
  <p class="info">Name: ${feature.properties.name}</p>
  <p class="info">Policy: ${feature.properties.policy}</p>
     
  </div>`
       
  layer.bindPopup(content)
  }

const predominantlyresidentialPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-home" aria-hidden="true"></i><p class="title">Q1.2 - Predominantly Residential Areas</p>
  <p></p>
  <p class="info">ID: ${feature.properties.id}</p>
  <p class="info">Name: ${feature.properties.name}</p>
  <p class="info">Policy: ${feature.properties.policy}</p>
       
  </div>`
         
  layer.bindPopup(content)
  }

const reliefroadcorridorPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-road" aria-hidden="true"></i><p class="title">Q1.2 - Relief Road Corridor</p>
  <p></p>
  <p class="info">ID: ${feature.properties.id}</p>
  <p class="info">Name: ${feature.properties.name}</p>
  <p class="info">Policy: ${feature.properties.policy}</p>
         
  </div>`
           
  layer.bindPopup(content)
  }

const sandaosPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-search" aria-hidden="true"></i><p class="title">Q1.2 - Sand - Area of Search</p>
  <p></p>
  <p class="info">ID: ${feature.properties.id}</p>
  <p class="info">Name: ${feature.properties.name}</p>
  <p class="info">Policy: ${feature.properties.policy}</p>
           
  </div>`
             
  layer.bindPopup(content)
  }

const sandgritaosPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-search" aria-hidden="true"></i><p class="title">Q1.2 - Sandstone/Gritstone - Area of Search</p>
  <p></p>
  <p class="info">ID: ${feature.properties.id}</p>
  <p class="info">Name: ${feature.properties.name}</p>
  <p class="info">Policy: ${feature.properties.policy}</p>
             
  </div>`
               
  layer.bindPopup(content)
  }

const shopfrontagesPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-shopping-basket" aria-hidden="true"></i><p class="title">Q1.2 - Shop Frontages</p>
  <p></p>
  <p class="info">ID: ${feature.properties.id}</p>
  <p class="info">Name: ${feature.properties.policyname}</p>
  <p class="info">Policy: ${feature.properties.policysitename}</p>
               
  </div>`
                 
  layer.bindPopup(content)
  }

const shoppingtcPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-shopping-cart" aria-hidden="true"></i><p class="title">Q1.2 - Shopping TC</p>
  <p></p>
  <p class="info">Area: ${feature.properties.shoppingareas}</p>
  <p class="info">Policy: ${feature.properties.policy_1}</p>
                 
  </div>`
                   
  layer.bindPopup(content)
  }

const shoppingareasPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-shopping-cart" aria-hidden="true"></i><p class="title">Q1.2 - Shopping Areas</p>
  <p></p>
  <p class="info">Name: ${feature.properties.policysitename}</p>
  <p class="info">Policy: ${feature.properties.policy}</p>
                   
  </div>`
                     
  layer.bindPopup(content)
  }

const sbiPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-leaf" aria-hidden="true"></i><p class="title">Q1.2 - Sites of Biological Importance</p>
  <p></p>
  <p class="info">Site Name: ${feature.properties.site_name}</p>
  <p class="info">Reference Number: ${feature.properties.reference_number}</p>
                     
  </div>`
                       
  layer.bindPopup(content)
  }

const sssiPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-flask" aria-hidden="true"></i><p class="title">Q1.2 - Sites of Special Scientific Interest</p>
  <p></p>
  <p class="info">Site Name: ${feature.properties.sssi_name}</p>
  <p class="info">Site Name: ${feature.properties.sssi_area}</p>
  <p class="info">Designation Status: ${feature.properties.designation_status}</p>
                       
  </div>`
                         
  layer.bindPopup(content)
  }

const strategicopenspacePopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-tree" aria-hidden="true"></i><p class="title">Q1.2 - Strategic Open Space</p>
  <p></p>
  <p class="info">Policy: ${feature.properties.policy}</p>
                         
  </div>`
                           
  layer.bindPopup(content)
  }

const strategicrecreationroutesPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-bicycle" aria-hidden="true"></i><p class="title">Q1.2 - Strategic Recreation Routes</p>
  <p></p>
  <p class="info">ID: ${feature.properties.id}</p>
  <p class="info">Policy: ${feature.properties.policy}</p>
                           
  </div>`
                             
  layer.bindPopup(content)
  }

const towncentreareasPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-building" aria-hidden="true"></i><p class="title">Q1.2 - Town Centre Areas</p>
  <p></p>
  <p class="info">ID: ${feature.properties.id}</p>
  <p class="info">Name: ${feature.properties.name}</p>
  <p class="info">Policy: ${feature.properties.policy}</p>
                             
  </div>`
                               
  layer.bindPopup(content)
  }

const adopted_highwaysPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-road" aria-hidden="true"></i><p class="title">Q2.1 - Adopted Highways</p>
  <p></p>
  <p class="info">USRN: ${feature.properties.usrn}</p>
  <p class="info">Street: ${feature.properties.street}</p>
                               
  </div>`
                                 
  layer.bindPopup(content)
  }

const section38Popup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-list" aria-hidden="true"></i><p class="title">Q2.1 - Section 38 Agreements</p>
  <p></p>
  <p class="info">Description: ${feature.properties.description}</p>
  <p class="info">Ref: ${feature.tlc_ref}</p>
  <p class="info">Registered Date: ${feature.properties.date_registered}</p>
                               
  </div>`
                                
  layer.bindPopup(content)
  }  

const privatestreetworksPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-road" aria-hidden="true"></i><p class="title">Q2.1 - Private Streetworks</p>
  <p></p>
  <p class="info">USRN: ${feature.properties.usrn}</p>
  <p class="info">Street: ${feature.thorofare}</p>
                                 
  </div>`
                                  
  layer.bindPopup(content)
  }
  
const trunk200Popup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-road" aria-hidden="true"></i><p class="title">Q3.4 - Trunk Road 200m Buffer</p>
  <p></p>
  <p class="info">Scheme Name: ${feature.properties.scheme_type}</p>
  <p class="info">Scheme Description: ${feature.properties.short_description}</p>
                                   
  </div>`
                                    
  layer.bindPopup(content)
  }
  
const roadalterationsPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-road" aria-hidden="true"></i><p class="title">Q3.4 - Road Alterations</p>
  <p></p>
  <p class="info">Scheme Type: ${feature.properties.scheme_type}</p>
  <p class="info">Details: ${feature.properties.short_description}</p>
  <p class="info">Date for Completion: ${feature.properties.date_for_completion}</p>
  <p class="info">Reference: ${feature.properties.unique_reference}</p>
                                     
  </div>`
                                      
  layer.bindPopup(content)
  }

const newroadPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-road" aria-hidden="true"></i><p class="title">Q3.4 - New Road Construction</p>
  <p></p>
  <p class="info">Scheme Type: ${feature.properties.scheme_type}</p>
  <p class="info">Details: ${feature.properties.short_description}</p>
                                       
  </div>`
                                        
  layer.bindPopup(content)
  }

const newroadconsultPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-road" aria-hidden="true"></i><p class="title">Q3.4 - Proposed New Road Consultation</p>
  <p></p>
  <p class="info">Scheme Type: ${feature.properties.scheme_type}</p>
  <p class="info">Short Description: ${feature.properties.short_description}</p>
                                         
  </div>`
                                          
  layer.bindPopup(content)
  }

const newrailwayPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-road" aria-hidden="true"></i><p class="title">Q3.5 - Proposed Rail Buffer</p>
  <p></p>
  <p class="info">Scheme Type: ${feature.properties.scheme}</p>
                                           
  </div>`
                                            
  layer.bindPopup(content)
  }

export {
  planningappsPopup,
  buildingregsapprovalPopup, 
  buildingcertPopup,
  airport_public_safety_zonePopup,
  ancientmonumentPopup,
  conservationareaPopup,
  employmentareasPopup,
  employmentproposedPopup,
  prowPopup,
  floodzonesPopup,
  greenbeltPopup,
  greenbeltmedsPopup,
  generalPopup,
  greenchainPopup,
  gravel_aosPopup,
  housingsitesPopup,
  landscapecharacterareaPopup,
  localnaturereservePopup,
  localopenspacePopup,
  localwildlifesitesPopup,
  metrolinkcorridorPopup,
  m60gatewaysitesPopup,
  parkgardenofhistoricinterestPopup,
  pgasPopup,
  predominantlyresidentialPopup,
  reliefroadcorridorPopup,
  sandaosPopup,
  sandgritaosPopup,
  shopfrontagesPopup,
  shoppingtcPopup,
  shoppingareasPopup,
  sbiPopup,
  sssiPopup,
  strategicopenspacePopup,
  strategicrecreationroutesPopup,
  towncentreareasPopup,
  adopted_highwaysPopup, 
  section38Popup, 
  privatestreetworksPopup,
  trunk200Popup,
  roadalterationsPopup,
  newroadPopup,
  newroadconsultPopup,
  newrailwayPopup
}