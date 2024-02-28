export function withUserId(Component, origin) {
    return (props) => {
        let userId = 'test';

        return <Component userId={userId} {...props} />;
    };
}
