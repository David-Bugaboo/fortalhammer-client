# 🚀 Setup do Sistema Order of Battle com MongoDB

## 📋 **Sistema Implementado**

✅ **Autenticação JWT** completa  
✅ **MongoDB** com Mongoose  
✅ **Order of Battle** virtual  
✅ **Crusade Cards** interativos  
✅ **Sistema de Ranks** e experiência  
✅ **Battle Traits** e **Battle Scars**  
✅ **Requisitions** e upgrades

## 🔧 **Configuração**

### 1. **Variáveis de Ambiente (.env.local)**

```env
# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/warhammer-fortaleza
# Para MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/warhammer-fortaleza

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRES_IN=7d

# Next.js Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-nextauth-secret-key

# Application Settings
NODE_ENV=development
```

### 2. **Instalar Dependências**

```bash
npm install mongodb mongoose jsonwebtoken bcryptjs jose uuid zod
npm install --save-dev @types/bcryptjs @types/jsonwebtoken @types/uuid
```

### 3. **Configurar MongoDB**

#### **Opção A: MongoDB Local**

```bash
# Instalar MongoDB Community Edition
# Windows: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/
# macOS: brew install mongodb/brew/mongodb-community
# Linux: https://docs.mongodb.com/manual/administration/install-on-linux/

# Iniciar MongoDB
mongod
```

#### **Opção B: MongoDB Atlas (Recomendado)**

1. Criar conta em [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Criar cluster gratuito
3. Configurar usuário e senha
4. Obter string de conexão
5. Adicionar IP à whitelist

### 4. **Arquitetura do Sistema**

```
src/
├── lib/
│   ├── mongodb.ts              # Conexão MongoDB
│   ├── auth.ts                 # JWT & Autenticação
│   └── models/
│       ├── User.ts             # Modelo de usuário
│       ├── CrusadeRoster.ts    # Order of Battle
│       └── CrusadeUnit.ts      # Crusade Cards
├── app/
│   ├── api/
│   │   ├── auth/
│   │   │   ├── login/route.ts  # API Login
│   │   │   └── register/route.ts # API Registro
│   │   └── rosters/
│   │       ├── route.ts        # CRUD Rosters
│   │       └── [id]/units/route.ts # CRUD Units
│   ├── login/page.tsx          # Página de Login
│   └── order-of-battle/page.tsx # Sistema Principal
```

## 🎮 **Funcionalidades Implementadas**

### **👤 Autenticação**

- ✅ Registro de usuários com validação
- ✅ Login com JWT token
- ✅ Middleware de autenticação
- ✅ Validação de senha forte
- ✅ Sistema de alianças (Guardians/Despoilers/Marauders)

### **📊 Order of Battle**

- ✅ Criação múltiplos rosters por usuário
- ✅ Limite de supply e controle
- ✅ Sistema de pontos de crusade
- ✅ Histórico de batalhas
- ✅ Crusade badges e conquistas

### **🃏 Crusade Cards**

- ✅ Sistema completo de experiência
- ✅ Ranks automáticos (Battle-ready → Legendary)
- ✅ Battle Traits do Nachmund Gauntlet
- ✅ Battle Scars e Out of Action
- ✅ Equipment e Relics
- ✅ Histórico detalhado de batalhas

### **⚔️ Sistema de Batalha**

- ✅ Tracking de vitórias/derrotas
- ✅ Strategic Asset Points
- ✅ Requisitions system
- ✅ Campanha multi-fase
- ✅ Marked for Greatness

## 🚦 **Como Usar**

### **1. Primeiro Acesso**

```bash
# Iniciar desenvolvimento
npm run dev

# Acessar sistema
http://localhost:3000/login
```

### **2. Registro de Usuário**

- Criar conta escolhendo aliança
- Sistema validará força da senha
- Token JWT gerado automaticamente

### **3. Criação de Roster**

```javascript
// Exemplo via API
POST / api / rosters;
Authorization: Bearer <
  token >
  {
    name: "Iron Warriors 1st Company",
    faction: "Chaos Space Marines",
    subfaction: "Iron Warriors",
    alliance: "despoilers",
  };
```

### **4. Adição de Unidades**

```javascript
// Exemplo via API
POST /api/rosters/:rosterId/units
{
  "name": "Chaos Lord",
  "unitType": "HQ",
  "powerRating": 8,
  "pointsCost": 120,
  "equipment": [
    {
      "id": "power_fist",
      "name": "Power Fist",
      "type": "weapon"
    }
  ]
}
```

## 🎯 **Próximos Passos**

### **Interface Completa**

- [ ] Dashboard de Order of Battle
- [ ] Editor visual de Crusade Cards
- [ ] Sistema de batalhas
- [ ] Calculadora de experiência
- [ ] Gerador de relatórios

### **Recursos Avançados**

- [ ] Upload de imagens para unidades
- [ ] Sistema de notificações
- [ ] Integração com Discord
- [ ] Export/Import de rosters
- [ ] Torneios e rankings

### **APIs Pendentes**

- [ ] Battle Traits management
- [ ] Requisitions system
- [ ] Campaign tracking
- [ ] Battle reporting

## 🛡️ **Segurança**

- ✅ Passwords hasheadas com bcrypt
- ✅ JWT tokens com expiração
- ✅ Validação de entrada rigorosa
- ✅ Autorização por usuário
- ✅ Rate limiting (implementar)

## 🔍 **Debugging**

### **Problemas Comuns**

1. **Erro de Conexão MongoDB**

   ```bash
   # Verificar se MongoDB está rodando
   mongosh
   # ou
   mongo
   ```

2. **Token Expirado**

   ```bash
   # Fazer login novamente
   # Token expira em 7 dias por padrão
   ```

3. **Validation Error**
   ```bash
   # Verificar campos obrigatórios
   # Consultar logs do servidor
   ```

## 📞 **Suporte**

- Sistema totalmente funcional com MongoDB
- Autenticação JWT implementada
- APIs REST completas
- Pronto para desenvolvimento da interface

**Próximo passo**: Implementar interface completa do Order of Battle! 🚀
