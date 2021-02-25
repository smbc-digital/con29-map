const Locally_listed_Popup = (feature, layer) => {
  const content = `<div class="item"><i class="fa fa-list" aria-hidden="true"></i><p class="title">Locally Listed Building</p>
    <p></p>
    <p class="info">Name: ${feature.properties.name}</p>
    <p class="info">Type: ${feature.properties.type}</p>
    <p class="info">Committee: ${feature.properties.committee}</p>
    <p class="info">Ward: ${feature.properties.ward}</p>
    <p></p>
    <p class="title"><a href="${feature.properties.web_db_link}" target="_blank">Further Information</a></p>
    </div>`
  layer.bindPopup(content)
}

const Statutory_listed_Popup = (feature, layer) => {
  const content = `<div class="item"><i class="fa fa-list" aria-hidden="true"></i><p class="title">Statutory Listed Building</p>
    <p></p>
    <p class="info">Name: ${feature.properties.name}</p>
    <p class="info">Type: ${feature.properties.type}</p>
    <p class="info">Grade: ${feature.properties.grade}</p>
    <p class="info">Committee: ${feature.properties.committee}</p>
    <p class="info">Ward: ${feature.properties.ward}</p>
    <p></p>
    <p class="title"><a href="${feature.properties.web_db_link}" target="_blank"> Further Information</a></p>
    </div>`
  layer.bindPopup(content)
}

const Conservation_area_Popup = (feature, layer) => {
  const content = `<div class="item"><i class="fa fa-tag" aria-hidden="true"></i><p class="title">Conservation Area</p>
    <p></p>
    <p class="info">Name: ${feature.properties.cons_area}</p>
    <p></p>
    <p class="title"><a href="${feature.properties.web_info_link}" target="_blank">Further Information</a></p>
    </div>`
  layer.bindPopup(content)
}

const Article4_1_direction_Popup = (feature, layer) => {
  const content = `<div class="item"><i class="fa fa-list" aria-hidden="true"></i><p class="title">Article 4-1 Direction</p>
    <p></p>
    <p class="info">Name: ${feature.properties.conservation_area}</p>
    <p class="info">Type: ${feature.properties.type}</p>
    <p></p>
    <p class="title"><a href="${feature.properties.web_db_link}" target="_blank">Further Information</a></p>
    </div>`
  layer.bindPopup(content)
}

const Article4_2_direction_Popup = (feature, layer) => {
  const content = `<div class="item"><i class="fa fa-list" aria-hidden="true"></i><p class="title">Article 4-2 Direction</p>
    <p></p>
    <p class="info">Name: ${feature.properties.conservation_area}</p>
    <p class="info">Type: ${feature.properties.type}</p>
    <p></p>
    <p class="title"><a href="${feature.properties.web_db_link}" target="_blank">Further Information</a></p>
    </div>`
  layer.bindPopup(content)
}

const Scheduled_monument_Popup = (feature, layer) => {
  const content = `<div class="item"><i class="fa fa-university" aria-hidden="true"></i><p class="title">Scheduled Monument</p>
    <p></p>
    <p class="info">Name: ${feature.properties.name}</p>
    <p class="info">National Monument No: ${feature.properties.national_monument_no}</p>
    <p class="title">${feature.properties.web_db_link}</p>
    </div>`
  layer.bindPopup(content)
}

const Historic_Parks_Gardens_Popup = (feature, layer) => {
  const content = `<div class="item"><i class="fa fa-tree" aria-hidden="true"></i><p class="title">Registered Historic Park or Garden</p>
    <p></p>
    <p class="info">Name: ${feature.properties.site}</p>
    <p class="title">${feature.properties.web_db_link}</p>
    </div>`
  layer.bindPopup(content)
}

export {
  Locally_listed_Popup,
  Statutory_listed_Popup,
  Conservation_area_Popup,
  Article4_1_direction_Popup,
  Article4_2_direction_Popup,
  Scheduled_monument_Popup,
  Historic_Parks_Gardens_Popup
}