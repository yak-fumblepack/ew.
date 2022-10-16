import React, { useState } from 'react';

const Medications = () => {
    const acne_meds = [
        {
            "position":
                1,
            "block_position":
                "top",
            "title":
                "Exposed Acne Treatment: Basic Kit",
            "price":
                "$83.24",
            "extracted_price":
                83.24,
            "link":
                "https://www.exposedskincare.com/products/basic-kit/",
            "source":
                "Exposed Skin Care",
            "thumbnail":
                "https://serpapi.com/searches/634bff7a8cd87804fa7e5434/images/3eff8ac651981f11fef35c597756ec3dea22fd86c32d8b7b6652837805112a3f.png"
        },
        {
            "position":
                2,
            "block_position":
                "top",
            "title":
                "Benzagel Acne Gel, 30gm",
            "price":
                "$8.99",
            "extracted_price":
                8.99,
            "link":
                "https://www.amazon.ca/Benzagel-074108204905-Acne-Gel-30gm/dp/B00A8UEBN4?source=ps-sl-shoppingads-lpcontext&psc=1&smid=A3DWYIK6Y9EEQB",
            "source":
                "Amazon CA",
            "thumbnail":
                "https://serpapi.com/searches/634bff7a8cd87804fa7e5434/images/3eff8ac651981f11fef35c597756ec3d4ffd499f0aaabc06ccb335db715ff74c.png"
        },
        {
            "position":
                3,
            "block_position":
                "top",
            "title":
                "Neutrogena Rapid Clear - Acne Spot Treatment Gel for Stubborn Acne Breakouts - 5% Benzoyl Peroxide, Maximum Strength - 28g",
            "price":
                "$11.99",
            "extracted_price":
                11.99,
            "link":
                "https://www.amazon.ca/Neutrogena-Stubborn-Treatment-Breakouts-Peroxide/dp/B01N6HXS8L?source=ps-sl-shoppingads-lpcontext&psc=1&smid=A3DWYIK6Y9EEQB",
            "source":
                "Amazon CA",
            "thumbnail":
                "https://serpapi.com/searches/634bff7a8cd87804fa7e5434/images/3eff8ac651981f11fef35c597756ec3dd3b742b24d8a8e854fccaab8cbf26c06.png"
        }
    ]

    const atopic_dermatitis_meds = [
        {
            "position":
                1,
            "block_position":
                "right",
            "title":
                "Eczema+ Dermatitis Face ...",
            "price":
                "$38.00",
            "extracted_price":
                38,
            "link":
                "https://ca.skinfix.com/products/dermatitis-face-balm?variant=27960065196131&utm_source=google&utm_medium=cpc&utm_campaign=Google%20Shopping",
            "source":
                "Skinfix",
            "thumbnail":
                "https://serpapi.com/searches/634bffaf2f542e56446cd4f7/images/9811cb71ea856123c95b6460ab1f6a74b018aefc801fad8514a9f233f111d47d.png",
            "extensions":
                [
                    "Special offer"
                ]
        },
        {
            "position":
                2,
            "block_position":
                "right",
            "title":
                "Eucerin Complete Repair",
            "price":
                "$19.56",
            "extracted_price":
                19.56,
            "link":
                "https://www.amazon.ca/EUCERIN-Complete-Repair-Moisturizing-Extremely/dp/B0795V9ZQQ?source=ps-sl-shoppingads-lpcontext&psc=1&smid=A3DWYIK6Y9EEQB",
            "source":
                "Amazon CA",
            "thumbnail":
                "https://serpapi.com/searches/634bffaf2f542e56446cd4f7/images/9811cb71ea856123c95b6460ab1f6a745feefb96275f6d779796fc3a8fd6a67d.png"
        },
        {
            "position":
                3,
            "block_position":
                "right",
            "title":
                "H-Eczema Formula 11ml",
            "price":
                "$47.95",
            "extracted_price":
                47.95,
            "link":
                "https://www.amoils.com/products/eczema?currency=CAD",
            "source":
                "Healing Natural Oils",
            "rating":
                4.7,
            "reviews":
                112,
            "thumbnail":
                "https://serpapi.com/searches/634bffaf2f542e56446cd4f7/images/9811cb71ea856123c95b6460ab1f6a74a8e042a6f2e0b4e173a6509b93c00870.png"
        },
        {
            "position":
                4,
            "block_position":
                "right",
            "title":
                "Skinfix Dermatitis Face Balm 0.48 ...",
            "price":
                "$38.00",
            "extracted_price":
                38,
            "link":
                "https://www.sephora.com/product/dermatitis-face-balm-P442910?country_switch=ca&skuId=2218188",
            "source":
                "Sephora",
            "rating":
                4.2,
            "reviews":
                504,
            "thumbnail":
                "https://serpapi.com/searches/634bffaf2f542e56446cd4f7/images/9811cb71ea856123c95b6460ab1f6a7429dfa1f2a7b2714ae863afe4d90bd5fd.png"
        },
        {
            "position":
                5,
            "block_position":
                "right",
            "title":
                "Daily Use Hypoallergenic ...",
            "price":
                "$16.95",
            "extracted_price":
                16.95,
            "link":
                "https://dormer211.com/products/dormer-211-specialite-hyper-emollient",
            "source":
                "Dormer211",
            "thumbnail":
                "https://serpapi.com/searches/634bffaf2f542e56446cd4f7/images/9811cb71ea856123c95b6460ab1f6a740b8525bf504e2aa5847fc4fe43d61199.png",
            "extensions":
                [
                    "Free ship $30+"
                ]
        },
        {
            "position":
                6,
            "block_position":
                "right",
            "title":
                "Eczema Cream CHANV",
            "price":
                "$39.99",
            "extracted_price":
                39.99,
            "link":
                "https://maisondherbes.com/en/produit/eczema-cream-chanv/?utm_source=Google%20Shopping&utm_campaign=Test%20EN&utm_medium=cpc&utm_term=60671",
            "source":
                "Maison d'Herbes",
            "thumbnail":
                "https://serpapi.com/searches/634bffaf2f542e56446cd4f7/images/9811cb71ea856123c95b6460ab1f6a7411441f19481369189485397178c788f9.png",
            "extensions":
                [
                    "Free ship $50+"
                ]
        },
        {
            "position":
                7,
            "block_position":
                "right",
            "title":
                "Eucerin Aquaphor Baby ...",
            "price":
                "$12.31",
            "extracted_price":
                12.31,
            "link":
                "https://well.ca/products/eucerin-aquaphor-baby-healing_183715.html",
            "source":
                "Well.ca",
            "thumbnail":
                "https://serpapi.com/searches/634bffaf2f542e56446cd4f7/images/9811cb71ea856123c95b6460ab1f6a74b08239a801c6a1371bdf55ca176d3852.png",
            "extensions":
                [
                    "Sale"
                ]
        },
        {
            "position":
                8,
            "block_position":
                "right",
            "title":
                "Cetaphil PRO Restoraderm ...",
            "price":
                "$16.49",
            "extracted_price":
                16.49,
            "link":
                "https://www.amazon.ca/Cetaphil-Restoraderm-Replenishing-Moisturizer-295/dp/B003TQU1Q0?source=ps-sl-shoppingads-lpcontext&psc=1&smid=A3DWYIK6Y9EEQB",
            "source":
                "Amazon CA",
            "thumbnail":
                "https://serpapi.com/searches/634bffaf2f542e56446cd4f7/images/9811cb71ea856123c95b6460ab1f6a7443169fad4ca089ac1879dc725f9f2bd0.jpeg"
        },
        {
            "position":
                9,
            "block_position":
                "right",
            "title":
                "Flexitol Naturals Eczema Relief ...",
            "price":
                "$14.98",
            "extracted_price":
                14.98,
            "link":
                "https://www.amazon.ca/Flexitol-Naturals-Eczema-Cream-1-Count/dp/B00I5A7AZA?source=ps-sl-shoppingads-lpcontext&psc=1&smid=A3DWYIK6Y9EEQB",
            "source":
                "Amazon CA",
            "thumbnail":
                "https://serpapi.com/searches/634bffaf2f542e56446cd4f7/images/9811cb71ea856123c95b6460ab1f6a74eeaafad62a0ec0c36e0784395a4e9703.png"
        }
    ]

    const contact_dermatitis_meds = [
        {
            "position":
                1,
            "block_position":
                "right",
            "title":
                "Flexitol Naturals Eczema Relief Cream | Natural Alternative to Steroids | Relieves Skin Irritation & Itching | 56g",
            "price":
                "$14.98",
            "extracted_price":
                14.98,
            "link":
                "https://www.google.ca/aclk?sa=l&ai=DChcSEwi_1Or95uT6AhUJqMgKHUlVA6YYABADGgJxdQ&ae=2&sig=AOD64_1APxCjvm_i8EwZLFFakCxLT0EoMA&ctype=5&q=&ved=2ahUKEwjo1OP95uT6AhVBFFkFHR0tDF4Q5bgDKAB6BAgEEAY&adurl=",
            "source":
                "Amazon CA",
            "thumbnail":
                "https://serpapi.com/searches/634c004f2bc7d8c0a0819c29/images/836ba2b931bb02037842d69f9cb413296fbd0587e66c8e0f01545b6ec7daaee7.png"
        },
        {
            "position":
                2,
            "block_position":
                "right",
            "title":
                "Sudocrem - Diaper Rash Cream for Baby, Soothes, Heals, and Protects, Relief and Treatment of Diaper Rash, Zinc Oxide Cream - 400g",
            "price":
                "$17.99",
            "extracted_price":
                17.99,
            "link":
                "https://www.google.ca/aclk?sa=l&ai=DChcSEwi_1Or95uT6AhUJqMgKHUlVA6YYABACGgJxdQ&ae=2&sig=AOD64_0ct0PuuQxke6TK-7jhz8uOidnFZw&ctype=5&q=&ved=2ahUKEwjo1OP95uT6AhVBFFkFHR0tDF4Q5bgDKAB6BAgEEAs&adurl=",
            "source":
                "Amazon CA",
            "thumbnail":
                "https://serpapi.com/searches/634c004f2bc7d8c0a0819c29/images/836ba2b931bb02037842d69f9cb41329c12e3c2812c5b65bde5ee5bf51b4cf5c.png"
        }

    ]

    const eczema_meds = [
        {
            "position":
                1,
            "block_position":
                "top",
            "title":
                "BZK Antiseptic Towelette - ULINE Canada - 2 Boxes of 100 - S-18566",
            "price":
                "$20.00",
            "extracted_price":
                20,
            "link":
                "https://www.uline.ca/Product/Detail/S-18566/First-Aid/BZK-Antiseptic-Towelette?pricode=YF230",
            "source":
                "ULINE Canada",
            "thumbnail":
                "https://serpapi.com/searches/634c00829bddf73cf32f78b4/images/5fb9e4eb8ebfb859b7d6ee80913076a804d641575ae9b1ee922ff57eae19effe.png"
        },
        {
            "position":
                2,
            "block_position":
                "top",
            "title":
                "Eucerin Complete Repair Cream, 454 g",
            "price":
                "$19.56",
            "extracted_price":
                19.56,
            "link":
                "https://www.amazon.ca/EUCERIN-Complete-Repair-Moisturizing-Extremely/dp/B0795V9ZQQ?source=ps-sl-shoppingads-lpcontext&psc=1&smid=A3DWYIK6Y9EEQB",
            "source":
                "Amazon CA",
            "thumbnail":
                "https://serpapi.com/searches/634c00829bddf73cf32f78b4/images/5fb9e4eb8ebfb859b7d6ee80913076a85078e71ea62cd271150e071d9715889b.png"
        },
        {
            "position":
                3,
            "block_position":
                "top",
            "title":
                "H-Eczema Formula 11ml",
            "price":
                "$47.95",
            "extracted_price":
                47.95,
            "link":
                "https://www.amoils.com/products/eczema?currency=CAD",
            "source":
                "Healing Natural Oils",
            "rating":
                4.7,
            "reviews":
                112,
            "thumbnail":
                "https://serpapi.com/searches/634c00829bddf73cf32f78b4/images/5fb9e4eb8ebfb859b7d6ee80913076a82f2993e7fe22e5406867c92db98a1db8.png"
        },
        {
            "position":
                4,
            "block_position":
                "top",
            "title":
                "Flexitol Naturals Eczema Relief Cream | Natural Alternative to Steroids | Relieves Skin Irritation & Itching | 56g",
            "price":
                "$14.98",
            "extracted_price":
                14.98,
            "link":
                "https://www.amazon.ca/Flexitol-Naturals-Eczema-Cream-1-Count/dp/B00I5A7AZA?source=ps-sl-shoppingads-lpcontext&psc=1&smid=A3DWYIK6Y9EEQB",
            "source":
                "Amazon CA",
            "thumbnail":
                "https://serpapi.com/searches/634c00829bddf73cf32f78b4/images/5fb9e4eb8ebfb859b7d6ee80913076a804b6a00d8c4b45e0210bca806e64b965.png"
        }
    ]

    const mappings = {
        "acne_meds": acne_meds,
        "atopic_dermatitis_meds": atopic_dermatitis_meds,
        "eczema_meds": eczema_meds,
        "contact_dermatitis_meds": contact_dermatitis_meds
    }




    return (
        <div className="relative w-full lg:max-w-sm">

            <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
                <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                    <li class="mr-2" role="presentation">
                        <button class="inline-block p-4 rounded-t-lg border-b-2 text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="true">Acne</button>
                    </li>
                    <li class="mr-2" role="presentation">
                        <button class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:border-transparent text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-700" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Atopic Dermatitis</button>
                    </li>
                    <li class="mr-2" role="presentation">
                        <button class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:border-transparent text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-700" id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Contact Dermatitis</button>
                    </li>
                    <li role="presentation">
                        <button class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:border-transparent text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-700" id="contacts-tab" data-tabs-target="#contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">Eczema</button>
                    </li>
                </ul>
            </div>
            <div id="myTabContent">
                <div class="p-4 bg-gray-50 rounded-lg dark:bg-gray-800" id="profile" role="tabpanel" aria-labelledby="profile-tab">




                    {mappings["acne_meds"].map((item, index) => (
                        <div className="py-2">
                            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img class="rounded-t-lg" src={item.thumbnail} alt="" />
                                </a>
                                <div class="p-5">
                                    <a href="#">
                                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                                    </a>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.price}</p>
                                    <a href={item.link} class="inline-flex items-center text-blue-600 hover:underline">
                                        Buy
                                        <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}



                </div>
                <div class="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">

                    {mappings["atopic_dermatitis_meds"].map((item, index) => (
                        <div className="py-2">
                            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img class="rounded-t-lg" src={item.thumbnail} alt="" />
                                </a>
                                <div class="p-5">
                                    <a href="#">
                                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                                    </a>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.price}</p>
                                    <a href={item.link} class="inline-flex items-center text-blue-600 hover:underline">
                                        Buy
                                        <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
                <div class="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800" id="settings" role="tabpanel" aria-labelledby="settings-tab">
                    <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Settings tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
                </div>
                <div class="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800" id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
                    <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Contacts tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
                </div>
            </div>

        </div>
    );
};

export default Medications;