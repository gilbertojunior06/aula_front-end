import { Icon, Heart, MessageSquare, Home, Megaphone, Calendar, User, Send, Cloud } from 'lucide-react'
import { useState, useEffect } from 'react'
import './App.css'

function Sidebar({icon: Icon , label, funcao_Click }){
  return (
    <div className='nav-item' onClick={funcao_Click}>
      <Icon size={20}/>
      <span>{label}</span>
    </div>
  )
}
function PostCard({author, role, time, content, likes}){
  return (
    <div className='post-card'>
      <div className='post-header'>
        <div className='avatar'>{author[0]}</div>
        <div>
          <div style={{ fontWeight: 'bold', fontSize: '14px'}}>{author}</div>
          <div style={{ fontSize: '12px', color:'#6b7280'}}>{role} . {time}</div>
        </div>
      </div>
      <p className='post-content'>
        {content}
      </p>
      <div className='post-actions'>
        <button className='action-btn'>
          <Heart size={18}  fill='#6b7280'/>
          <span>{likes}</span>
        </button>
        <button className='action-btn'>
          <MessageSquare size={18}/>
          <span>Comentar</span>
        </button>

      </div>
    </div>
  )
}

function WeatherWiget(){
  const [weather, setWeather] = useState(null);
  // open-meteo
  
  useEffect(() => {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=-23.55&longitude=-46.63&current_weather=true')
    .then(res => res.json())
    .then(data => setWeather(data.current_weather))
    .catch(err => console.error("Erro ao carregar o clima", err))
    //console.log('weather.current_weather',weather.current_weather)
  }, [])

  if(!weather) return <div className='post-card'>
    Carregando previsão do tempo ...
  </div>

  return (
    <div className='post-card'>
      <div style={{ backgroundColor: '#f0f9ff', border: '1px solid #bae6fd'}}>
        <Cloud size={24} />
        <h3 style={{ margin: 0 }}>Tempo agora (São Paulo)</h3>
      </div>
      <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0c4a6e'}}>
        {weather.temperature}
      </div>
      <p style={{ color: '#0284c7'}}>Vento {weather.windspeed} km/h</p>
      <p style={{ marginTop: '10px', fontWeight: 'bold', color: weather.temperature > 24 ? '#16a34a' : '#ea580c'}}>
        {weather.temperature > 24 ? '🏄‍♀️ Ótimo dia para usar a piscina.':'🌡️ Talvez esteja fro demais para usar a piscina.'}
      </p>
    </div>
  )
}


function App() {
  const [posts, setPosts ] = useState([
    {
      id: 1,
      author: 'Dona Maria (Ap 42)',
      role: 'Moradora',
      time: `${new Date().getMinutes()} minutos atrás`,
      content: 'Alguém encontrou uma chave de carro no playground hoje cedo?',
      likes: 5
    },
    {
      id: 2,
      author: 'Síndico Marcos',
      role: 'Administração',
      time: `${new Date().getMinutes()} minutos atrás`,
      content: 'Atenção: Limpeza da caixa d agua agendada para amanhã às 08hrs',
      likes: 12
    }
  ])

  const [newPost, setNewPost] = useState('')

  const [activePage, setActivePage] = useState('home')

  function handlePostSubmit(){
    if (newPost.trim() === ''){
      return
    }
    const new_post = {
      id: Date.now(),
      author: "Eu",
      role: "Moradora",
      time: new Date().getMinutes(),
      content: newPost,
      likes: 0
    }

    setPosts([new_post, ...posts])
    setNewPost('')
  }
  return (<>
    <div className='app-container'>
      <aside className='sidebar'>
        <div className='logo_container'>
          <div style={{ background: '#2563eb', padding: '6px', borderRadius: '8px', color: 'white' }}>
            <Home size={20}/>
          </div>
          <div style={{ fontSize: '20px', fontWeight: 'bold'}}>CondoNet</div>
        </div>
        <nav>
          <Sidebar icon={Home} label={'Ínicio'} funcao_Click={() => setActivePage('home')}/>
          <Sidebar icon={Megaphone} label={'Comunicados'} funcao_Click={() => setActivePage('comunicados')}/>
          <Sidebar icon={Calendar} label={'Minhas Reservas'} funcao_Click={() => setActivePage('reservas')}/>
          <Sidebar icon={User} label={'Meu Perfil'} funcao_Click={() => setActivePage('perfil')} />
        </nav>
      </aside>
      <main className='feed-main'>
        { activePage === 'home' && (<>
          <h2 style={{ marginBottom: '20px', color: '#111827'}}>Mural do Condomínio</h2>
        
        <div className='new-post-box'>
          <textarea 
            className='post-textarea'
            placeholder='O que deseja compartilhar com seus vizinhos?'
            rows={'3'}
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
          />
          <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '10px', borderTop:'1px solid #f3f4f6'}}>
            <button className='post-submit' onClick={handlePostSubmit}>
              Enviar <Send size={16} />
            </button>
          </div>          
        </div>
        {posts.map((item) => (
            <PostCard 
            key={item.id}
            author={item.author}
            role={item.role}
            time={item.time}
            content={item.content}
            likes={item.likes}
            />
          ))}
          </>
        ) }

        { activePage === 'comunicados' && (
          <>
            <h2 style={{ marginBottom: '20px', color: '#111827'}}>Comunicados & Utilidades</h2>
            <WeatherWiget />
            <div className='post-card'>
              <h3>📢 Aviso da Administração</h3>
              <p>Lembramos que a manutenção dos elevadores ocorrerá na próxima terça-feira das 09hrs às 12hrs.</p>
            </div>
          </>
        )}
        
      </main>
    </div>
    </>
  )
}

export default App
