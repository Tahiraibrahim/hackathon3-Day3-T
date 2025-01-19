
export const allproducts = `
    *[_type == "car"]{
        _id,
        name,
        type,
        title,
        price,
        description,
        tags,
        "imageUrl": image.asset->url
    }
`;

export const forcar = `
    *[_type == "car"][0..3]{
        _id,
        name,
        type,
        title,
        price,
        description,
        tags,
        "imageUrl": image.asset->url
    }
`;
