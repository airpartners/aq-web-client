import React from "react";

export const supported = ["en", "es"]
export const en = {
    "code": "en",
    "DrawerNav": {
        "Contact us": "Contact us",
        "Frequently Asked Questions":"Frequently Asked Questions"
    },
    "AppBarText": {
        "contact-us": "Contact us",
        "privacy": "Privacy Policy"
    },
    "BottomNav": {
        "Home": "Home",
        "Map": "Map"
    },
    "ContactUsPage": {
        "Body": "If you have questions or feedback please contact us at ",
        "Email": "adeairquality@gmail.com"
    },
    "FAQPage" : {
        "Title": "Frequently Asked Questions coming soon!"
    },
        "WeatherComponent": {
        "Weather": "Weather",
        "Temperature": "Temperature",
        "Humidity": "Humidity",
        "Wind": "Wind"
    },
        "PollutantText": {
        "CO Full Name": "Carbon Monoxide",
        "NO2 Full Name": "Nitrogen Dioxide",
        "O3 Full Name": "Ozone",
        "NO Full Name": "Nitrogen Monoxide",
        "PM25 Full Name": "Particulate Matter smaller than 2.5 micrometers (µm)",
        "PM10 Full Name": "Particulate Matter smaller than 10 micrometers (µm)",
        "PNC Full Name": "Particle Number Concentration between 300-500 nanometers (nm)",
        "CO Shorten Full Name": "Carbon Monoxide",
        "NO2 Shorten Full Name": "Nitrogen Dioxide",
        "O3 Shorten Full Name": "Ozone",
        "NO Shorten Full Name": "Nitrogen Monoxide",
        "PM25 Shorten Full Name": "Particulate Matter 2.5",
        "PNC Shorten Full Name": "Particle Number Concentration",
        "PM10 Shorten Full Name": "Particulate Matter 10",
        "PNC Info": (<span>Small particles are the most dangerous for human health, because they are able to penetrate deeply into the lungs and have long lifetimes in the air. This is a measure of the particle number concentration (PNC) of particles in the smallest size range our instrument measures (300-500 nm). While this is larger than the ultrafine particle (UFP) size range (smaller than 100 nm), combined with combustion-related gas phase pollutants like NO and CO, PNC<sub>0.3-0.5</sub> gives us a sense of when the smallest particles, including UFPs, are high in concentration.</span>)
    },
    "Pollutants": "Pollutants",
    "AtAGlance": {
        "Now": "Now",
        "Last updated": "Last updated",
        "Not available": "Not available",
        "Baseline unavailable": "Baseline unavailable",
        "Data unavailable": "Data unavailable",
        "Above baseline": "above baseline",
        "Below baseline": "below baseline",
        "National Ambient Air Quality Standards": (<a href="https://www.epa.gov/criteria-air-pollutants/naaqs-table" target="_blank" rel="noopener noreferrer">National Ambient Air Quality Standards</a>),
        "Hour": "hour",
        "What is ppb": "What is ppb?",
        "What is ppb answer": "Parts per billion (ppb) is a term that expresses the number of units (parts) of a given substance that exist as a portion of a greater substance composed of one billion parts.",
        "Why are some data not available": "Why are some data not available?",
        "Why are some data not available answer": "Our device is not working properly at the moment!",
        "Why is baseline for this pollutant not available": "Why is baseline for this pollutant not available?",
        "Why is baseline for this pollutant not available answer": "This pollutant is currently unregulated.",
        "CO": {
            "Questions": {
                "What is it": "What is Carbon Monoxide and what produces it?",
                "Harmful effects": "What kinds of harmful effects can Carbon Monoxide cause?",
                "At risk populations": "Who is at the greatest risk from exposure to Carbon Monoxide?",
                "Sources": "Sources",
            },
            "Answers": {
                "What is it": (<span>Carbon Monoxide (CO) is a colorless and odorless gas. It results from the incomplete combustion of carbon-containing fuels such as natural gas, gasoline, or wood, and is emitted by a wide variety of combustion sources, including motor vehicles, power plants, wildfires, and incinerators.
                    <br/>Nationally and, particularly in urban areas, the majority of outdoor CO emissions to ambient air come from mobile sources. [1, 2]</span>),
                "Harmful effects": (<span>CO at high levels can be harmful to humans by impairing the amount of oxygen transported in the bloodstream to critical organs. The most common effects of CO exposure are fatigue, headaches, confusion, and dizziness due to inadequate oxygen delivery to the brain.
                    <br/>For people with cardiovascular disease, short-term CO exposure can further reduce their body’s already compromised ability to respond to the increased oxygen demands of exercise, exertion, or stress. Inadequate oxygen delivery to the heart muscle leads to chest pain and decreased exercise tolerance. Unborn babies whose mothers experience high levels of CO exposure during pregnancy are at risk of adverse developmental effects. New evidence also reveals that long-term exposure to low concentrations is also associated with a wide range of health effects. [1, 2]</span>),
                "At risk populations": (<span>Unborn babies, infants, elderly people, and people with anemia or with a history of heart or respiratory disease are most likely to experience health effects with exposure to elevated levels of CO. [2]</span>),
                "Sources": (<span>[1] <a href="https://www.who.int/airpollution/ambient/pollutants/en/" target="_blank" rel="noopener noreferrer">Ambient air pollution: Pollutants | WHO Air Quality Guidelines</a>
                    <br/>[2] <a href="https://ww2.arb.ca.gov/resources/carbon-monoxide-and-health" target="_blank" rel="noopener noreferrer">Carbon Monoxide & Health | California Air Resources Board</a>
                    </span>),
            },
        },
        "NO2": {
            "Questions": {
                "What is it": "What is Nitrogen Oxides and what produces it?",
                "Harmful effects": "What kinds of harmful effects can Nitrogen Oxides cause?",
                "At risk populations": "Who is at the greatest risk from exposure to Nitrogen Oxides?",
                "Sources": "Sources",
            },
            "Answers": {
                "What is it": (<span>Nitrogen Oxides (NO<sub>2</sub>) are a mixture of gases that are composed of nitrogen and oxygen. Two of the most toxicologically significant nitrogen oxides are nitric oxide and nitrogen dioxide; both are nonflammable and colorless to brown at room temperature. <br/>
                    This is a sharp sweet-smelling gas at room temperature, whereas nitrogen dioxide has a strong, harsh odor and is a liquid at room temperature, becoming a reddish-brown gas above 70<sup>o</sup>F. <br/>
                    Nitrogen oxides are released to the air from the exhaust of motor vehicles, the burning of coal, oil, or natural gas, and during processes such as arc welding, electroplating, engraving, and dynamite blasting. They are also produced commercially by reacting nitric acid with metals or cellulose. [1]</span>),
                "Harmful effects": (<span>Low levels of nitrogen oxides in the air can irritate your eyes, nose, throat, and lungs, possibly causing you to cough and experience shortness of breath, tiredness, and nausea. Exposure to low levels can also result in fluid build-up in the lungs 1 or 2 days after exposure. Breathing high levels of nitrogen oxides can cause rapid burning, spasms, and swelling of tissues in the throat and upper respiratory tract, reduced oxygenation of body tissues, a build-up of fluid in your lungs, and death. [1]</span>),
                "At risk populations": (<span>Infants and children are particularly at risk because they have disproportionately higher exposure to NO<sub>2</sub> than adults due to their greater breathing rate for their body weight and their typically greater outdoor exposure duration. Several studies have shown that long-term NO<sub>2</sub> exposure during childhood, the period of rapid lung growth, can lead to smaller lungs at maturity in children with higher compared to lower levels of exposure. In addition, children with asthma have a greater degree of airway responsiveness compared with adult asthmatics. In adults, the greatest risk is to people who have chronic respiratory diseases, such as asthma and chronic obstructive pulmonary disease. [2]</span>),
                "Sources": (<span>[1] <a href="https://www.atsdr.cdc.gov/toxfaqs/tfacts175.pdf" target="_blank" rel="noopener noreferrer">Nitrogen Oxides (nitric oxide, nitrogen dioxide, etc.) | CDC</a>
                    <br/>[2] <a href="https://ww2.arb.ca.gov/resources/nitrogen-dioxide-and-health" target="_blank" rel="noopener noreferrer">Nitrogen Dioxide & Health | California Air Resources Board</a>
                    </span>),
            }
        },
        "O3": {
            "Questions": {
                "What is it": "What is Ozone and what produces it?",
                "Harmful effects": "What kinds of harmful effects can Ozone cause?",
                "At risk populations": "Who is at the greatest risk from exposure to Ozone?",
                "Sources": "Sources",
            },
            "Answers": {
                "What is it": (<span>Ozone (O<sub>3</sub>) is a highly reactive gas composed of three oxygen atoms. While O<sub>3</sub> is naturally-occurring and beneficial in the stratosphere (upper levels of the atmosphere), human-generated O<sub>3</sub> pollution in the troposphere (near the ground) has significant adverse impacts. [1]</span>),
                "Harmful effects": (<span>When inhaled, ozone can damage the lungs. Relatively low amounts can cause chest pain, coughing, shortness of breath and throat irritation. Ozone may also worsen chronic respiratory diseases such as asthma and compromise the ability of the body to fight respiratory infections. People vary widely in their susceptibility to ozone. Healthy people, as well as those with respiratory difficulty, can experience breathing problems when exposed to ozone. Exercise during exposure to ozone causes a greater amount of ozone to be inhaled, and increases the risk of harmful respiratory effects. Recovery from the harmful effects can occur following short-term exposure to low levels of ozone, but health effects may become more damaging and recovery less certain at higher levels or from longer exposures (US EPA, 1996a, 1996b). [1]</span>),
                "At risk populations": (<span>Research shows adults and children who spend more time outdoors participating in vigorous physical activities are at greater risk from the harmful health effects of ozone exposure. While there are relatively few studies of ozone’s effects on children, the available studies show that children are no more or less likely to suffer harmful effects than adults.
                    <br/>However, there are a number of reasons why children may be more susceptible to ozone and other pollutants. Children and teens spend nearly twice as much time outdoors and engage in vigorous activities as adults. Children breathe more rapidly than adults and inhale more pollution per pound of their body weight than adults. Also, children are less likely than adults to notice their own symptoms and avoid harmful exposures.
                    <br/>Further research may be able to better distinguish between health effects in children and adults. Children, adolescents, and adults who exercise or work outdoors, where ozone concentrations are the highest, are at the greatest risk of harm from this pollutant. [2]
                    </span>),
                "Sources": (<span>[1] <a href="https://www.epa.gov/ozone-pollution-and-your-patients-health/what-ozone" target="_blank" rel="noopener noreferrer">What is Ozone? | Ozone and Your Patients' Health | US EPA</a>
                    <br/>[2] <a href="https://ww2.arb.ca.gov/resources/ozone-and-health" target="_blank" rel="noopener noreferrer">Ozone & Health | California Air Resources Board</a>
                    </span>),
            }
        },
        "PM25": {
            "Questions": {
                "What is it": "What is Particulate Matter and what produces it?",
                "Harmful effects": "What kinds of harmful effects can Particulate Matter cause?",
                "At risk populations": "Who is at the greatest risk from exposure to Particulate Matter?",
                "Sources": "Sources",
            },
            "Answers": {
                "What is it": (<span>Particulate Matter (PM) refers to a complex mixture of small droplets of liquid, dry solid fragments, and solid cores with liquid coatings.
                    <br/>PM<sub>2.5</sub> can be directly emitted through combustion by on-road vehicles, aircraft, ships and power generation facilities. Biomass burning - such as wildfires, agricultural, and domestic burning - are also significant contributors to PM. PM<sub>2.5</sub> can also be generated through atmospheric chemical processes that generate particle mass from precursor pollutant gases including NO<sub>x</sub>, volatile organic compounds (VOCs), and ozone.</span>),
                "Harmful effects": (<span>For PM<sub>2.5</sub>, short-term exposures (up to 24-hours duration) have been associated with premature mortality, increased hospital admissions for heart or lung causes, acute and chronic bronchitis, asthma attacks, emergency room visits, respiratory symptoms, and restricted activity days.
                    <br/>Long-term (months to years) exposure to PM<sub>2.5</sub> has been linked to premature death, particularly in people who have chronic heart or lung diseases, and reduced lung function growth in children. The International Agency for Research on Cancer (IARC) published a review in 2015 that concluded that particulate matter in outdoor air pollution causes lung cancer. [1]
                    </span>),
                "At risk populations": (<span>Research points to older adults with chronic heart or lung disease, children and asthmatics as the groups most likely to experience adverse health effects with exposure to PM<sub>10</sub> and PM<sub>2.5</sub>.
                    <br/>Also, children and infants are susceptible to harm from inhaling pollutants such as PM because they inhale more air per pound of body weight than do adults - they breathe faster, spend more time outdoors and have smaller body sizes. In addition, children's immature immune systems may cause them to be more susceptible to PM than healthy adults.
                    <br/>Research from the California Air Resources Board (CARB)-initiated Children’s Health Study found that children living in communities with high levels of PM<sub>2.5</sub> had slower lung growth, and had smaller lungs at age 18 compared to children who lived in communities with low PM<sub>2.5</sub> levels. [1]</span>),
                "Sources": (<span>[1] <a href="https://ww2.arb.ca.gov/resources/inhalable-particulate-matter-and-health" target="_blank" rel="noopener noreferrer">Inhalable Particulate Matter and Health (PM<sub>2.5</sub> and PM<sub>10</sub>) | California Air Resources Board</a>
                    </span>),
            }
        },
        "PM10": {
            "Questions": {
                "What is it": "What is Particulate Matter and what produces it?",
                "Harmful effects": "What kinds of harmful effects can Particulate Matter cause?",
                "At risk populations": "Who is at the greatest risk from exposure to Particulate Matter?",
                "Sources": "Sources",
            },
            "Answers": {
                "What is it": (<span>Particulate Matter (PM) refers to a complex mixture of small droplets of liquid, dry solid fragments, and solid cores with liquid coatings.
                    <br/>PM<sub>10</sub> is a larger fraction of particulate matter, and is typically generated by mechanical processes such as dust generation by vehicles and wind, sea spray, and biomass burning. [1]</span>),
                "Harmful effects": (<span>Short-term exposures to PM<sub>10</sub> have been associated primarily with worsening of respiratory diseases, including asthma and chronic obstructive pulmonary disease (COPD), leading to hospitalization and emergency department visits.
                    <br/>The effects of long-term exposure to PM<sub>10</sub> are less clear, although several studies suggest a link between long-term PM<sub>10</sub> exposure and respiratory mortality. The International Agency for Research on Cancer (IARC) published a review in 2015 that concluded that particulate matter in outdoor air pollution causes lung cancer. [1]</span>),
                "At risk populations": (<span>Research points to older adults with chronic heart or lung disease, children and asthmatics as the groups most likely to experience adverse health effects with exposure to PM<sub>10</sub> and PM<sub>2.5</sub>.
                    <br/>Also, children and infants are susceptible to harm from inhaling pollutants such as PM because they inhale more air per pound of body weight than do adults - they breathe faster, spend more time outdoors and have smaller body sizes. In addition, children's immature immune systems may cause them to be more susceptible to PM than healthy adults.
                    <br/>Research from the California Air Resources Board (CARB)-initiated Children’s Health Study found that children living in communities with high levels of PM<sub>2.5</sub> had slower lung growth, and had smaller lungs at age 18 compared to children who lived in communities with low PM<sub>2.5</sub> levels. [1]</span>),
                "Sources": (<span>[1] <a href="https://ww2.arb.ca.gov/resources/inhalable-particulate-matter-and-health" target="_blank" rel="noopener noreferrer">Inhalable Particulate Matter and Health (PM<sub>2.5</sub> and PM<sub>10</sub>) | California Air Resources Board</a>
                    </span>),
            }
        },
        "NO": {
            "Questions": {
                "What is it": "What is Nitrogen Oxides and what produces it?",
                "Harmful effects": "What kinds of harmful effects can Nitrogen Oxides cause?",
                "At risk populations": "",
                "Sources": "Sources",
            },
            "Answers": {
                "What is it": (<span>Nitrogen Oxide (NO) is a chemical compound of oxygen and nitrogen that is formed by reacting with each other during combustion at high temperatures, mainly combustion of fuel such as oil, diesel, gas and organic matter. NO<sub>x</sub> is a common designation of nitrogen oxides NO and NO<sub>2</sub>. [1]</span>),
                "Harmful effects": (<span>It can cause breathing problems, headaches, chronically reduced lung function, eye irritation, loss of appetite and corroded teeth.
                    Also emitted in diesel fumes are solid particles which can penetrate deep into the lungs and cause cancer, chronic breathing problems and premature death in people with heart or lung disease. [2]</span>),
                "At risk populations": "",
                "Sources": (<span>[1] <a href="https://www.atsdr.cdc.gov/toxfaqs/tfacts175.pdf" target="_blank" rel="noopener noreferrer">Nitrogen Oxides (nitric oxide, nitrogen dioxide, etc.) | CDC</a>
                    <br/>[2] <a href="https://phys.org/news/2015-09-nox-gases-diesel-car-fumes.html" target="_blank" rel="noopener noreferrer">NO<sub>x</sub> gases in diesel car fumes: Why are they so dangerous? (phys.org)</a>
                    </span>),
            }
        },
        "PNC": {
            "Questions": {
                "What is it": "What is Nitrogen Oxides and what produces it?",
                "Harmful effects": "What kinds of harmful effects can Nitrogen Oxides cause?",
                "At risk populations": "",
                "Sources": "Sources",
            },
            "Answers": {
                "What is it": (<span>Particle Number Concentration (PNC) is a measure of particles in the smallest size range our instrument measures (300-500 nm). While this is larger than the ultrafine particle (UFP) size range (smaller than 100 nm), combined with combustion-related gas phase pollutants like NO and CO, PNC<sub>0.3-0.5</sub> gives us a sense of when the smallest particles, including UFPs, are high in concentration.</span>),
                "Harmful effects": (<span>Small particles are the most dangerous for human health because they are able to penetrate deeply into the lungs and have long lifetimes in the air. [1]</span>),
                "At risk populations": "",
                "Sources": (<span>[1] <a href="https://www.lung.org/clean-air/outdoors/what-makes-air-unhealthy/particle-pollution" target="_blank" rel="noopener noreferrer">Particle Pollution (lung.org)</a>
                    </span>),
            }
        },
    },
    "Graph": {
        "Time": "Time",
        "GraphDropdown": {
            "ListAriaLabel": "Pollutant selection for graph",
            "ListItemAriaLabel": "showing graph data for",
            "ListItemText": "Showing graph data for"
        }
    },
    "FAQ": {
        "IntroTitle": "Frequently Asked Questions",
        "IntroText": "Find below a knowledge base about air quality and frequently asked questions about it."
    },
    "Privacy Policy": {
        "IntroTitle": "Privacy Policy",
        "IntroText": `Air Partners built the Air Partners app as a Free app. This SERVICE is provided by Air Partners at no cost and is intended for use as is.

        This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service.
        
        If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.
        
        The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at Air Partners unless otherwise defined in this Privacy Policy.`,
        "InformationTitle": "Information Collection and Use",
        "InformationText": `For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to None. The information that we request will be retained by us and used as described in this privacy policy.`,
        "LogTitle": "Log Data",
        "LogText": `We want to inform you that whenever you use our Service, in a case of an error in the app we collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics.`,
        "CookiesTitle": "Cookies",
        "CookiesText": `Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory.

        This Service does not use these “cookies” explicitly. However, the app may use third party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.`,
        "ServiceTitle": "Service Providers",
        "ServiceText": `We may employ third-party companies and individuals due to the following reasons: to facilitate our Service, to provide the Service on our behalf, to perform Service-related services, or to assist us in analyzing how our Service is used.
        We want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.`,
        "SecurityTitle": "Security",
        "SecurityText": `We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.`,
        "LinksTitle": "Links to Other Sites",
        "LinksText": `This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.`,
        "ChildrensTitle": "Children's Privacy",
        "ChildrensText": `These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions.`,
        "ChangesTitle": "Changes to the Privacy Policy",
        "ChangesText": `We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.

        This policy is effective as of 2020-07-27`,
        "ContactTitle": "Contact Us",
        "ContactText": `If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at adeairquality@gmail.com.`,
    }
};

export const es = {
    "code": "es",
    "DrawerNav": {
        "Contact us": "Contactenos",
        "Frequently Asked Questions":"Preguntas Frecuentes"
    },
    "AppBarText": {
        "contact-us": "Contactenos",
        "privacy": "Política de privacidad"
    },
    "BottomNav": {
        "Home": "Inicio",
        "Map": "Mapa"
    },
    "ContactUsPage": {
        "Body": "Si tiene preguntas o comentarios, por favor contactenos en ",
        "Email": "adeairquality@gmail.com"
    },
    "FAQPage" : {
        "Title": "Frequently Asked Questions coming soon!"
    },
    "WeatherComponent": {
        "Weather": "Clima",
        "Temperature": "Temperatura",
        "Humidity": "Humedad",
        "Wind": "Viento"
    },
    "PollutantText": {
        "CO Full Name": "Monóxido de Carbono",
        "NO2 Full Name": "Dióxido de Nitrógeno",
        "O3 Full Name": "Ozono",
        "NO Full Name": "Monóxido de Nitrógeno",
        "PM25 Full Name": "Materia Particular más pequeño que 2.5 micrómetros (µm)",
        "PM10 Full Name": "Materia Particular más pequeño que 10 micrómetros (µm)",
        "PNC Full Name": "Concentración de Número de Partículas entre 300-500 nanómetros (nm)",
        "CO Shorten Full Name": "Monóxido de Carbono",
        "NO2 Shorten Full Name": "Dióxido de Nitrógeno",
        "O3 Shorten Full Name": "Ozono",
        "NO Shorten Full Name": "Monóxido de Nitrógeno",
        "PM25 Shorten Full Name": "Materia Particular 2.5",
        "PM10 Shorten Full Name": "Materia Particular 10",
        "PNC Shorten Full Name": "Concentración de Número de Partículas",
        "PNC Info": (<span>Small particles are the most dangerous for human health, because they are able to penetrate deeply into the lungs and have long lifetimes in the air. This is a measure of the particle number concentration (PNC) of particles in the smallest size range our instrument measures (300-500 nm). While this is larger than the ultrafine particle (UFP) size range (smaller than 100 nm), combined with combustion-related gas phase pollutants like NO and CO, PNC<sub>0.3-0.5</sub> gives us a sense of when the smallest particles, including UFPs, are high in concentration.</span>)
    },
    "Pollutants": "Contaminantes",
    // TODO: Needs translating
    "AtAGlance": {
        "Now": "Actual",
        "Last updated": "Última actualización",
        "Not available": "No está disponible",
        "Baseline unavailable": "Baseline unavailable",
        "Data unavailable": "Data unavailable",
        "Above baseline": "above baseline",
        "Below baseline": "below baseline",
        "National Ambient Air Quality Standards": (<a href="https://www.epa.gov/criteria-air-pollutants/naaqs-table" target="_blank" rel="noopener noreferrer">National Ambient Air Quality Standards</a>), // TODO: Needs translating
        "Hour": "hour",
        "What is ppb": "What is ppb?",
        "What is ppb answer": "Parts per billion (ppb) is a term that expresses the number of units (parts) of a given substance that exist as a portion of a greater substance composed of one billion parts.",
        "Why are some data not available": "Why are some data not available?",
        "Why are some data not available answer": "Our device is not working properly at the moment!",
        "Why is baseline for this pollutant not available": "Why is baseline for this pollutant not available?",
        "Why is baseline for this pollutant not available answer": "This pollutant is currently unregulated.",
        "CO": {
            "Questions": {
                "What is it": "What is Carbon Monoxide and what produces it?",
                "Harmful effects": "What kinds of harmful effects can Carbon Monoxide cause?",
                "At risk populations": "Who is at the greatest risk from exposure to Carbon Monoxide?",
                "Sources": "Sources",
            },
            "Answers": {
                "What is it": (<span>Carbon Monoxide (CO) is a colorless and odorless gas. It results from the incomplete combustion of carbon-containing fuels such as natural gas, gasoline, or wood, and is emitted by a wide variety of combustion sources, including motor vehicles, power plants, wildfires, and incinerators.
                    <br/>Nationally and, particularly in urban areas, the majority of outdoor CO emissions to ambient air come from mobile sources. [1, 2]</span>),
                "Harmful effects": (<span>CO at high levels can be harmful to humans by impairing the amount of oxygen transported in the bloodstream to critical organs. The most common effects of CO exposure are fatigue, headaches, confusion, and dizziness due to inadequate oxygen delivery to the brain.
                    <br/>For people with cardiovascular disease, short-term CO exposure can further reduce their body’s already compromised ability to respond to the increased oxygen demands of exercise, exertion, or stress. Inadequate oxygen delivery to the heart muscle leads to chest pain and decreased exercise tolerance. Unborn babies whose mothers experience high levels of CO exposure during pregnancy are at risk of adverse developmental effects. New evidence also reveals that long-term exposure to low concentrations is also associated with a wide range of health effects. [1, 2]</span>),
                "At risk populations": (<span>Unborn babies, infants, elderly people, and people with anemia or with a history of heart or respiratory disease are most likely to experience health effects with exposure to elevated levels of CO. [2]</span>),
                "Sources": (<span>[1] <a href="https://www.who.int/airpollution/ambient/pollutants/en/" target="_blank" rel="noopener noreferrer">Ambient air pollution: Pollutants | WHO Air Quality Guidelines</a>
                    <br/>[2] <a href="https://ww2.arb.ca.gov/resources/carbon-monoxide-and-health" target="_blank" rel="noopener noreferrer">Carbon Monoxide & Health | California Air Resources Board</a>
                    </span>),
            },
        },
        "NO2": {
            "Questions": {
                "What is it": "What is Nitrogen Oxides and what produces it?",
                "Harmful effects": "What kinds of harmful effects can Nitrogen Oxides cause?",
                "At risk populations": "Who is at the greatest risk from exposure to Nitrogen Oxides?",
                "Sources": "Sources",
            },
            "Answers": {
                "What is it": (<span>Nitrogen Oxides (NO<sub>2</sub>) are a mixture of gases that are composed of nitrogen and oxygen. Two of the most toxicologically significant nitrogen oxides are nitric oxide and nitrogen dioxide; both are nonflammable and colorless to brown at room temperature. <br/>
                    This is a sharp sweet-smelling gas at room temperature, whereas nitrogen dioxide has a strong, harsh odor and is a liquid at room temperature, becoming a reddish-brown gas above 70<sup>o</sup>F. <br/>
                    Nitrogen oxides are released to the air from the exhaust of motor vehicles, the burning of coal, oil, or natural gas, and during processes such as arc welding, electroplating, engraving, and dynamite blasting. They are also produced commercially by reacting nitric acid with metals or cellulose. [1]</span>),
                "Harmful effects": (<span>Low levels of nitrogen oxides in the air can irritate your eyes, nose, throat, and lungs, possibly causing you to cough and experience shortness of breath, tiredness, and nausea. Exposure to low levels can also result in fluid build-up in the lungs 1 or 2 days after exposure. Breathing high levels of nitrogen oxides can cause rapid burning, spasms, and swelling of tissues in the throat and upper respiratory tract, reduced oxygenation of body tissues, a build-up of fluid in your lungs, and death. [1]</span>),
                "At risk populations": (<span>Infants and children are particularly at risk because they have disproportionately higher exposure to NO<sub>2</sub> than adults due to their greater breathing rate for their body weight and their typically greater outdoor exposure duration. Several studies have shown that long-term NO<sub>2</sub> exposure during childhood, the period of rapid lung growth, can lead to smaller lungs at maturity in children with higher compared to lower levels of exposure. In addition, children with asthma have a greater degree of airway responsiveness compared with adult asthmatics. In adults, the greatest risk is to people who have chronic respiratory diseases, such as asthma and chronic obstructive pulmonary disease. [2]</span>),
                "Sources": (<span>[1] <a href="https://www.atsdr.cdc.gov/toxfaqs/tfacts175.pdf" target="_blank" rel="noopener noreferrer">Nitrogen Oxides (nitric oxide, nitrogen dioxide, etc.) | CDC</a>
                    <br/>[2] <a href="https://ww2.arb.ca.gov/resources/nitrogen-dioxide-and-health" target="_blank" rel="noopener noreferrer">Nitrogen Dioxide & Health | California Air Resources Board</a>
                    </span>),
            }
        },
        "O3": {
            "Questions": {
                "What is it": "What is Ozone and what produces it?",
                "Harmful effects": "What kinds of harmful effects can Ozone cause?",
                "At risk populations": "Who is at the greatest risk from exposure to Ozone?",
                "Sources": "Sources",
            },
            "Answers": {
                "What is it": (<span>Ozone (O<sub>3</sub>) is a highly reactive gas composed of three oxygen atoms. While O<sub>3</sub> is naturally-occurring and beneficial in the stratosphere (upper levels of the atmosphere), human-generated O<sub>3</sub> pollution in the troposphere (near the ground) has significant adverse impacts. [1]</span>),
                "Harmful effects": (<span>When inhaled, ozone can damage the lungs. Relatively low amounts can cause chest pain, coughing, shortness of breath and throat irritation. Ozone may also worsen chronic respiratory diseases such as asthma and compromise the ability of the body to fight respiratory infections. People vary widely in their susceptibility to ozone. Healthy people, as well as those with respiratory difficulty, can experience breathing problems when exposed to ozone. Exercise during exposure to ozone causes a greater amount of ozone to be inhaled, and increases the risk of harmful respiratory effects. Recovery from the harmful effects can occur following short-term exposure to low levels of ozone, but health effects may become more damaging and recovery less certain at higher levels or from longer exposures (US EPA, 1996a, 1996b). [1]</span>),
                "At risk populations": (<span>Research shows adults and children who spend more time outdoors participating in vigorous physical activities are at greater risk from the harmful health effects of ozone exposure. While there are relatively few studies of ozone’s effects on children, the available studies show that children are no more or less likely to suffer harmful effects than adults.
                    <br/>However, there are a number of reasons why children may be more susceptible to ozone and other pollutants. Children and teens spend nearly twice as much time outdoors and engage in vigorous activities as adults. Children breathe more rapidly than adults and inhale more pollution per pound of their body weight than adults. Also, children are less likely than adults to notice their own symptoms and avoid harmful exposures.
                    <br/>Further research may be able to better distinguish between health effects in children and adults. Children, adolescents, and adults who exercise or work outdoors, where ozone concentrations are the highest, are at the greatest risk of harm from this pollutant. [2]
                    </span>),
                "Sources": (<span>[1] <a href="https://www.epa.gov/ozone-pollution-and-your-patients-health/what-ozone" target="_blank" rel="noopener noreferrer">What is Ozone? | Ozone and Your Patients' Health | US EPA</a>
                    <br/>[2] <a href="https://ww2.arb.ca.gov/resources/ozone-and-health" target="_blank" rel="noopener noreferrer">Ozone & Health | California Air Resources Board</a>
                    </span>),
            }
        },
        "PM25": {
            "Questions": {
                "What is it": "What is Particulate Matter and what produces it?",
                "Harmful effects": "What kinds of harmful effects can Particulate Matter cause?",
                "At risk populations": "Who is at the greatest risk from exposure to Particulate Matter?",
                "Sources": "Sources",
            },
            "Answers": {
                "What is it": (<span>Particulate Matter (PM) refers to a complex mixture of small droplets of liquid, dry solid fragments, and solid cores with liquid coatings.
                    <br/>PM<sub>2.5</sub> can be directly emitted through combustion by on-road vehicles, aircraft, ships and power generation facilities. Biomass burning - such as wildfires, agricultural, and domestic burning - are also significant contributors to PM. PM<sub>2.5</sub> can also be generated through atmospheric chemical processes that generate particle mass from precursor pollutant gases including NO<sub>x</sub>, volatile organic compounds (VOCs), and ozone.</span>),
                "Harmful effects": (<span>For PM<sub>2.5</sub>, short-term exposures (up to 24-hours duration) have been associated with premature mortality, increased hospital admissions for heart or lung causes, acute and chronic bronchitis, asthma attacks, emergency room visits, respiratory symptoms, and restricted activity days.
                    <br/>Long-term (months to years) exposure to PM<sub>2.5</sub> has been linked to premature death, particularly in people who have chronic heart or lung diseases, and reduced lung function growth in children. The International Agency for Research on Cancer (IARC) published a review in 2015 that concluded that particulate matter in outdoor air pollution causes lung cancer. [1]
                    </span>),
                "At risk populations": (<span>Research points to older adults with chronic heart or lung disease, children and asthmatics as the groups most likely to experience adverse health effects with exposure to PM<sub>10</sub> and PM<sub>2.5</sub>.
                    <br/>Also, children and infants are susceptible to harm from inhaling pollutants such as PM because they inhale more air per pound of body weight than do adults - they breathe faster, spend more time outdoors and have smaller body sizes. In addition, children's immature immune systems may cause them to be more susceptible to PM than healthy adults.
                    <br/>Research from the California Air Resources Board (CARB)-initiated Children’s Health Study found that children living in communities with high levels of PM<sub>2.5</sub> had slower lung growth, and had smaller lungs at age 18 compared to children who lived in communities with low PM<sub>2.5</sub> levels. [1]</span>),
                "Sources": (<span>[1] <a href="https://ww2.arb.ca.gov/resources/inhalable-particulate-matter-and-health" target="_blank" rel="noopener noreferrer">Inhalable Particulate Matter and Health (PM<sub>2.5</sub> and PM<sub>10</sub>) | California Air Resources Board</a>
                    </span>),
            }
        },
        "PM10": {
            "Questions": {
                "What is it": "What is Particulate Matter and what produces it?",
                "Harmful effects": "What kinds of harmful effects can Particulate Matter cause?",
                "At risk populations": "Who is at the greatest risk from exposure to Particulate Matter?",
                "Sources": "Sources",
            },
            "Answers": {
                "What is it": (<span>Particulate Matter (PM) refers to a complex mixture of small droplets of liquid, dry solid fragments, and solid cores with liquid coatings.
                    <br/>PM<sub>10</sub> is a larger fraction of particulate matter, and is typically generated by mechanical processes such as dust generation by vehicles and wind, sea spray, and biomass burning. [1]</span>),
                "Harmful effects": (<span>Short-term exposures to PM<sub>10</sub> have been associated primarily with worsening of respiratory diseases, including asthma and chronic obstructive pulmonary disease (COPD), leading to hospitalization and emergency department visits.
                    <br/>The effects of long-term exposure to PM<sub>10</sub> are less clear, although several studies suggest a link between long-term PM<sub>10</sub> exposure and respiratory mortality. The International Agency for Research on Cancer (IARC) published a review in 2015 that concluded that particulate matter in outdoor air pollution causes lung cancer. [1]</span>),
                "At risk populations": (<span>Research points to older adults with chronic heart or lung disease, children and asthmatics as the groups most likely to experience adverse health effects with exposure to PM<sub>10</sub> and PM<sub>2.5</sub>.
                    <br/>Also, children and infants are susceptible to harm from inhaling pollutants such as PM because they inhale more air per pound of body weight than do adults - they breathe faster, spend more time outdoors and have smaller body sizes. In addition, children's immature immune systems may cause them to be more susceptible to PM than healthy adults.
                    <br/>Research from the California Air Resources Board (CARB)-initiated Children’s Health Study found that children living in communities with high levels of PM<sub>2.5</sub> had slower lung growth, and had smaller lungs at age 18 compared to children who lived in communities with low PM<sub>2.5</sub> levels. [1]</span>),
                "Sources": (<span>[1] <a href="https://ww2.arb.ca.gov/resources/inhalable-particulate-matter-and-health" target="_blank" rel="noopener noreferrer">Inhalable Particulate Matter and Health (PM<sub>2.5</sub> and PM<sub>10</sub>) | California Air Resources Board</a>
                    </span>),
            }
        },
        "NO": {
            "Questions": {
                "What is it": "What is Nitrogen Oxides and what produces it?",
                "Harmful effects": "What kinds of harmful effects can Nitrogen Oxides cause?",
                "At risk populations": "",
                "Sources": "Sources",
            },
            "Answers": {
                "What is it": (<span>Nitrogen Oxide (NO) is a chemical compound of oxygen and nitrogen that is formed by reacting with each other during combustion at high temperatures, mainly combustion of fuel such as oil, diesel, gas and organic matter. NO<sub>x</sub> is a common designation of nitrogen oxides NO and NO<sub>2</sub>. [1]</span>),
                "Harmful effects": (<span>It can cause breathing problems, headaches, chronically reduced lung function, eye irritation, loss of appetite and corroded teeth.
                    Also emitted in diesel fumes are solid particles which can penetrate deep into the lungs and cause cancer, chronic breathing problems and premature death in people with heart or lung disease. [2]</span>),
                "At risk populations": "",
                "Sources": (<span>[1] <a href="https://www.atsdr.cdc.gov/toxfaqs/tfacts175.pdf" target="_blank" rel="noopener noreferrer">Nitrogen Oxides (nitric oxide, nitrogen dioxide, etc.) | CDC</a>
                    <br/>[2] <a href="https://phys.org/news/2015-09-nox-gases-diesel-car-fumes.html" target="_blank" rel="noopener noreferrer">NO<sub>x</sub> gases in diesel car fumes: Why are they so dangerous? (phys.org)</a>
                    </span>),
            }
        },
        "PNC": {
            "Questions": {
                "What is it": "What is Nitrogen Oxides and what produces it?",
                "Harmful effects": "What kinds of harmful effects can Nitrogen Oxides cause?",
                "At risk populations": "",
                "Sources": "Sources",
            },
            "Answers": {
                "What is it": (<span>Particle Number Concentration (PNC) is a measure of particles in the smallest size range our instrument measures (300-500 nm). While this is larger than the ultrafine particle (UFP) size range (smaller than 100 nm), combined with combustion-related gas phase pollutants like NO and CO, PNC<sub>0.3-0.5</sub> gives us a sense of when the smallest particles, including UFPs, are high in concentration.</span>),
                "Harmful effects": (<span>Small particles are the most dangerous for human health because they are able to penetrate deeply into the lungs and have long lifetimes in the air. [1]</span>),
                "At risk populations": "",
                "Sources": (<span>[1] <a href="https://www.lung.org/clean-air/outdoors/what-makes-air-unhealthy/particle-pollution" target="_blank" rel="noopener noreferrer">Particle Pollution (lung.org)</a>
                    </span>),
            }
        },
    },
    "Graph": {
        "Time": "Hora",
        "GraphDropdown": {
            "ListAriaLabel": "Selección de contaminante para la gráfica",
            "ListItemAriaLabel": "datos del gráfico para",
            "ListItemText": "Datos del gráfico para"
        }
    },
    // TODO: needs translating
    "FAQ": {
        "IntroTitle": "Frequently Asked Questions",
        "IntroText": "Find below a knowledge base about air quality and frequently asked questions about it."
    },
    "Privacy Policy": {
        "IntroTitle": "Privacy Policy",
        "IntroText": `Air Partners built the Air Partners app as a Free app. This SERVICE is provided by Air Partners at no cost and is intended for use as is.

        This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service.
        
        If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.
        
        The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at Air Partners unless otherwise defined in this Privacy Policy.`,
        "InformationTitle": "Information Collection and Use",
        "InformationText": `For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to None. The information that we request will be retained by us and used as described in this privacy policy.`,
        "LogTitle": "Log Data",
        "LogText": `We want to inform you that whenever you use our Service, in a case of an error in the app we collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics.`,
        "CookiesTitle": "Cookies",
        "CookiesText": `Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory.

        This Service does not use these “cookies” explicitly. However, the app may use third party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.`,
        "ServiceTitle": "Service Providers",
        "ServiceText": `We may employ third-party companies and individuals due to the following reasons: to facilitate our Service, to provide the Service on our behalf, to perform Service-related services, or to assist us in analyzing how our Service is used.
        We want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.`,
        "SecurityTitle": "Security",
        "SecurityText": `We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.`,
        "LinksTitle": "Links to Other Sites",
        "LinksText": `This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.`,
        "ChildrensTitle": "Children's Privacy",
        "ChildrensText": `These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions.`,
        "ChangesTitle": "Changes to the Privacy Policy",
        "ChangesText": `We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.

        This policy is effective as of 2020-07-27`,
        "ContactTitle": "Contact Us",
        "ContactText": `If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at adeairquality@gmail.com.`,
    }
};
