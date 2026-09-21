import scss from './Layout.module.scss' 

export const Layout = () => {
return (
    <div className={scss.wrapper}>
        <div className={scss.container}>
    <header className={scss.header}>
        <h1 className={scss.headerTitle}>
            MyLibrary
        </h1>
    </header>
    <main></main>
    <footer className={scss.footer}>
        <h3>2026</h3>
    </footer>
    </div>
</div>
)
}