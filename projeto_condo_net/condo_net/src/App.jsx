import { Icon, Heart, MessageSquare, Home, Megaphone, Calendar, User, Send } from 'lucide-react'
import { useState } from 'react'
import './App.css'

function Sidebar({icon: Icon ,label}){
  return (
    <div className='nav-item'>
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
          <Sidebar icon={Home} label={'Ínicio'}/>
          <Sidebar icon={Megaphone} label={'Comunicados'}/>
          <Sidebar icon={Calendar} label={'Minhas Reservas'} />
          <Sidebar icon={User} label={'Meu Perfil'} />
        </nav>
      </aside>
      <main className='feed-main'>
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
      </main>
    </div>
    </>
  )
}

export default App
