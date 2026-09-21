import scss from './Layout.module.scss' 

export const Layout = () => {
return (
    <div className={scss.wrapper}>
    <header>
        <h1>
            MyLibrary
        </h1>
    </header>
    <main></main>
    <footer>
        <h3>2026</h3>
    </footer>
</div>
)
}