export default (product: any) => {
    expect(product).toHaveProperty('id');
    expect(product).toHaveProperty('name');
    expect(product).toHaveProperty('price');
    expect(product).toHaveProperty('stocks');
    expect(product).toHaveProperty('createdAt');
    expect(product).toHaveProperty('updatedAt');
}
